import React from "react";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/outline";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginThumb from "../assets/login-thumb.jpg";
import { Button } from "../components";

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const { handleSubmit, register } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 w-96 bg-light rounded-lg border border-neutral-200 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-neutral-900">
            Entre na nossa plataforma
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-neutral-900"
            >
              Seu email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
            >
              Sua senha
            </label>
            <input
              required
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
            />
          </div>
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
          <button
            type="submit"
            className="w-full text-light bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Entrar na sua conta
          </button>
          <div className="text-sm font-medium text-neutral-500">
            Não está registrado?{" "}
            <a href="#" className="text-primary-700 hover:underline">
              Crie uma conta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
