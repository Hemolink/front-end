import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "../components";
import { login } from "../api";
import { SuccessFeedback } from "../components/Feedback";
import { ErrorFeedback } from "../components/Feedback/ErrorFeedback";
import { useQueryClient } from "react-query";

type LoginFormData = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Campo Email é obrigatório"),
  password: Yup.string().required("Campo Senha é obrigatório"),
});

export const Login = () => {
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>(formOptions);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [success, setSuccess] = React.useState<boolean | null>(null);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log(data);

    const response = await login(data.email);

    if (response.password === data.password) {
      setSuccess(true);
      queryClient.invalidateQueries("donors");
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 w-96 bg-light rounded-lg border border-neutral-200 shadow-md sm:p-6 lg:p-8">
        {success === true && (
          <SuccessFeedback
            onComplete={() => {
              navigate("/");
            }}
          />
        )}

        {success === false && (
          <ErrorFeedback
            onComplete={() => {
              setSuccess(null);
            }}
          />
        )}

        {success === null && (
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-2xl font-medium text-neutral-900 font-display">
              Entre na sua conta
            </h4>

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

            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-neutral-900"
                >
                  Lembrar-me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Entrar na sua conta
            </Button>
            <div className="text-sm font-medium text-neutral-500">
              Não está registrado?{" "}
              <Link to="/register" className="text-primary-700 hover:underline">
                Crie uma conta
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
