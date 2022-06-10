import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../components";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
}

export const Register = () => {
  const { handleSubmit, register } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 w-96 bg-light rounded-lg border border-neutral-200 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-neutral-900">
            Crie sua conta
          </h5>
          <div>
            <Input
              label="Seu nome"
              placeholder="Vanderli de Jesus"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <Input
              label="Seu email"
              type="email"
              placeholder="usuario@provedor.com.br"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <Input
              label="Sua senha"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <Input
              label="Confirme sua senha"
              type="password"
              placeholder="••••••••"
              {...register("passwordConfirmation", { required: true })} // TODO
            />
          </div>

          <button
            type="submit"
            className="w-full text-light bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Criar conta!
          </button>
        </form>
      </div>
    </div>
  );
};
