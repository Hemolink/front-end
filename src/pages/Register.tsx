import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step, StepLabel, Stepper } from "@mui/material";
import * as Yup from "yup";

import { useRegister } from "../api";
import { Button, Input } from "../components";
import { LoadingFeedback, SuccessFeedback } from "../components/Feedback";
import { Select } from "../components/Select";
import { useNavigate } from "react-router-dom";
import { cpfMask } from "../utils";
import { route } from ".";

interface RegisterFormData {
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bloodType: string;
  cpf: string;
  sex: string;
  weight: number;
}

const validationSchemas = [
  Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Por favor, digite um nome válido")
      .max(40)
      .required("Campo Nome é obrigatório"),
    surname: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Por favor, digite um sobrenome válido")
      .max(40)
      .required("Campo Sobrenome é obrigatório"),
    cpf: Yup.string()
      .required("Campo CPF é obrigatório")
      .matches(
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        "Por favor, digite um CPF válido"
      ),
    birthDate: Yup.string().required("Campo Data de Nascimento é obrigatório"),
    sex: Yup.string().required("Campo Sexo é obrigatório"),
  }),
  Yup.object().shape({
    weight: Yup.number().required("Campo Peso é obrigatório"),
    bloodType: Yup.string().required("Campo Tipo Sanguíneo é obrigatório"),
  }),
  Yup.object().shape({
    email: Yup.string()
      .email("Formato de email inválido")
      .required("Campo Email é obrigatório"),
    password: Yup.string()
      .required("Campo Senha é obrigatório")
      .min(6, "As senhas devem conter no mínimo 6 caracteres"),
    passwordConfirmation: Yup.string()
      .required("Confirmação de senha é obrigatório")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  }),
];

const steps = ["Dados pessoais", "Cadastro no banco de sangue", "Credenciais"];

export const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const formOptions = { resolver: yupResolver(validationSchemas[currentStep]) };
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm<RegisterFormData>(formOptions);

  const registerDonor = useRegister();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    return registerDonor.mutateAsync(data);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleStepChange("next")();
    }
  };

  const handleStepChange = (type: "next" | "back") => async () => {
    if (type === "next") {
      const isStepValid = await trigger();

      if (isStepValid) setCurrentStep((c) => c + 1);
    } else {
      setCurrentStep((c) => c - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 w-[500px] bg-light rounded-lg border border-neutral-200 shadow-md sm:p-6 lg:p-8">
        {registerDonor.isLoading && <LoadingFeedback />}

        {isSubmitSuccessful && !registerDonor.isLoading && (
          <div className="flex flex-col gap-8 items-center">
            <SuccessFeedback />
            <p className="text-xl">Usuário criado com sucesso!</p>
            <Button className="w-full" onClick={() => navigate(route.home)}>
              Voltar à página inicial
            </Button>
          </div>
        )}
        {!registerDonor.isLoading && !isSubmitSuccessful && (
          <form className="space-y-6">
            <h4 className="text-2xl font-medium text-neutral-900 font-display">
              Crie sua conta
            </h4>

            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>
                      <span className="font-bold font-display">{step}</span>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {currentStep === 0 && (
              <>
                <Input
                  label="Seu primeiro nome"
                  placeholder="Vanderli"
                  errorMessage={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  label="Seu sobrenome"
                  placeholder="Teixeira"
                  errorMessage={errors.surname?.message}
                  {...register("surname")}
                />
                <Input
                  label="Seu CPF"
                  placeholder="123.456.789-00"
                  errorMessage={errors.cpf?.message}
                  // mask={cpfMask}
                  {...register("cpf")}
                />
                <Input
                  label="Sua data de nascimento"
                  placeholder="dd/mm/aaaa"
                  errorMessage={errors.birthDate?.message}
                  {...register("birthDate")}
                />
                <Select
                  label="Seu sexo"
                  errorMessage={errors.sex?.message}
                  {...register("sex")}
                  options={[
                    {
                      label: "Masculino",
                      value: "M",
                    },
                    {
                      label: "Feminino",
                      value: "F",
                    },
                  ]}
                />
              </>
            )}

            {currentStep === 1 && (
              <>
                <Input
                  label="Seu peso"
                  placeholder="55 kg"
                  errorMessage={errors.weight?.message}
                  {...register("weight")}
                />
                <Input
                  label="Seu tipo sanguíneo"
                  placeholder="A-"
                  errorMessage={errors.bloodType?.message}
                  onKeyDown={handleEnter}
                  {...register("bloodType")}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <Input
                  label="Seu email"
                  type="email"
                  placeholder="usuario@provedor.com.br"
                  errorMessage={errors.email?.message}
                  {...register("email")}
                />

                <Input
                  label="Sua senha"
                  type="password"
                  placeholder="••••••••"
                  errorMessage={errors.password?.message}
                  {...register("password")}
                />

                <Input
                  label="Confirme sua senha"
                  type="password"
                  placeholder="••••••••"
                  errorMessage={errors.passwordConfirmation?.message}
                  onKeyDown={handleEnter}
                  {...register("passwordConfirmation")}
                />
              </>
            )}

            {currentStep < 2 && (
              <div className="flex justify-between gap-4">
                {currentStep > 0 && (
                  <Button
                    className="flex-grow bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-100"
                    onClick={handleStepChange("back")}
                  >
                    Anterior
                  </Button>
                )}
                <Button
                  className="flex-grow"
                  onClick={handleStepChange("next")}
                >
                  Próximo
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex justify-between gap-4">
                <Button
                  className="flex-grow bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-100"
                  onClick={handleStepChange("back")}
                >
                  Anterior
                </Button>
                <Button onClick={handleSubmit(onSubmit)} className="flex-grow">
                  Criar conta!
                </Button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
