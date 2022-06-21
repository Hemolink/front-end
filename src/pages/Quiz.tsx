import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button } from "../components";
import { Radio } from "../components/Radio";

interface QuizFormData {
  // General questions
  alcohol: boolean;
  cold: boolean;
  fever: boolean;
  chestPain: boolean;
  aids: boolean;
  covid: boolean;

  // Chronic problems
  fainting: boolean;
  convulsion: boolean;
  heartAttack: boolean;
  dengue: boolean;
  std: boolean;
  zika: boolean;
  cancer: boolean;

  // Behaviors
  drugs: boolean;
  smoke: boolean;
  sexWithoutProtection: boolean;
  prostitution: boolean;

  // Gender
  // For mens
  sexWithAnotherMan: boolean;

  // For women
  pregnancy: boolean;
  childbirth: boolean;
  breastFeeding: boolean;
}

const steps = [
  "Questões Gerais",
  "Problemas Crônicos",
  "Comportamental",
  "Especifidades de Gênero",
];

const validationSchemas = [
  Yup.object().shape({
    alcohol: Yup.string().required(),
    cold: Yup.string().required(),
    fever: Yup.string().required(),
    chestPain: Yup.string().required(),
    aids: Yup.string().required(),
    covid: Yup.string().required(),
  }),
  Yup.object().shape({
    fainting: Yup.string().required(),
    convulsion: Yup.string().required(),
    heartAttack: Yup.string().required(),
    dengue: Yup.string().required(),
    std: Yup.string().required(),
    zika: Yup.string().required(),
    cancer: Yup.string().required(),
  }),
  Yup.object().shape({
    drugs: Yup.string().required(),
    smoke: Yup.string().required(),
    sexWithoutProtection: Yup.string().required(),
    prostitution: Yup.string().required(),
  }),
  Yup.object().shape({
    sexWithAnotherMan: Yup.string().required(),
    pregnancy: Yup.string().required(),
    childbirth: Yup.string().required(),
    breastFeeding: Yup.string().required(),
  }),
];

const options = [
  {
    label: "Sim",
    value: true,
  },
  {
    label: "Não",
    value: false,
  },
];

export const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const formOptions = { resolver: yupResolver(validationSchemas[currentStep]) };
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuizFormData>(formOptions);

  const onSubmit: SubmitHandler<QuizFormData> = (data) => {
    console.log(data);
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
      <div className="p-4 w-[800px] bg-light rounded-lg border border-neutral-200 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6">
          <h4 className="text-2xl font-medium text-neutral-900 font-display">
            Avaliação de Risco
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
              <Radio
                title="Fez uso de bebida alcoólica?"
                options={options}
                errorMessage={errors.alcohol?.message}
                name="alcohol"
                register={register}
              />
              <Radio
                title="Está ou esteve resfriado ou gripado nos ultimos 15 dias?"
                options={options}
                errorMessage={errors.cold?.message}
                name="cold"
                register={register}
              />
              <Radio
                title="Teve febre nos ultimos 30 dias?"
                options={options}
                errorMessage={errors.fever?.message}
                name="fever"
                register={register}
              />
              <Radio
                title="Teve dor no peito quando faz esforço?"
                options={options}
                errorMessage={errors.chestPain?.message}
                name="chestPain"
                register={register}
              />
              <Radio
                title="Já fez teste para AIDS?"
                options={options}
                errorMessage={errors.aids?.message}
                name="aids"
                register={register}
              />
              <Radio
                title="Suspeita de COVID-19?"
                options={options}
                errorMessage={errors.covid?.message}
                name="covid"
                register={register}
              />
            </>
          )}

          {currentStep === 1 && (
            <>
              <Radio
                title="Desmaio?"
                options={options}
                errorMessage={errors.fainting?.message}
                name="fainting"
                register={register}
              />
              <Radio
                title="Convulsão?"
                options={options}
                errorMessage={errors.convulsion?.message}
                name="convulsion"
                register={register}
              />
              <Radio
                title="Derrame?"
                options={options}
                errorMessage={errors.heartAttack?.message}
                name="heartAttack"
                register={register}
              />
              <Radio
                title="Dengue?"
                options={options}
                errorMessage={errors.dengue?.message}
                name="dengue"
                register={register}
              />
              <Radio
                title="IST?"
                options={options}
                errorMessage={errors.std?.message}
                name="std"
                register={register}
              />
              <Radio
                title="Zika?"
                options={options}
                errorMessage={errors.zika?.message}
                name="zika"
                register={register}
              />
              <Radio
                title="Câncer?"
                options={options}
                errorMessage={errors.cancer?.message}
                name="cancer"
                register={register}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <Radio
                title="Usa ou já usou droga proibida(tóxicos)?"
                options={options}
                errorMessage={errors.drugs?.message}
                name="drugs"
                register={register}
              />
              <Radio
                title="Fuma?"
                options={options}
                errorMessage={errors.smoke?.message}
                name="smoke"
                register={register}
              />
              <Radio
                title="Fez ou faz sexo sem proteção nos últimos 12 meses?"
                options={options}
                errorMessage={errors.sexWithoutProtection?.message}
                name="sexWithoutProtection"
                register={register}
              />
              <Radio
                title="Teve relação sexual em casa de prostituição nós últimos 12 meses?"
                options={options}
                errorMessage={errors.prostitution?.message}
                name="prostitution"
                register={register}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <Radio
                title="Teve relação sexual com outro homem nos últimos 12 meses?"
                options={options}
                errorMessage={errors.sexWithAnotherMan?.message}
                name="sexWithAnotherMan"
                register={register}
              />
              <Radio
                title="Está grávida no momento?"
                options={options}
                errorMessage={errors.pregnancy?.message}
                name="pregnancy"
                register={register}
              />
              <Radio
                title="Teve parto nos últimos 6 meses?"
                options={options}
                errorMessage={errors.childbirth?.message}
                name="childbirth"
                register={register}
              />
              <Radio
                title="Está amamentando?"
                options={options}
                errorMessage={errors.breastFeeding?.message}
                name="breastFeeding"
                register={register}
              />
            </>
          )}

          {currentStep < 3 && (
            <div className="flex justify-between gap-4">
              {currentStep > 0 && (
                <Button
                  className="flex-grow bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-100"
                  onClick={handleStepChange("back")}
                >
                  Anterior
                </Button>
              )}
              <Button className="flex-grow" onClick={handleStepChange("next")}>
                Próximo
              </Button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex justify-between gap-4">
              <Button
                className="flex-grow bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-100"
                onClick={handleStepChange("back")}
              >
                Anterior
              </Button>
              <Button onClick={handleSubmit(onSubmit)} className="flex-grow">
                Marcar Agendamento
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
