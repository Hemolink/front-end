import { TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginThumb from "../assets/login-thumb.jpg";
import { Button } from "../components";

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
    <div className="grid grid-cols-2 gap-6 h-fill mt-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-8">Cadastro</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <TextField
            variant="filled"
            label="Nome Completo"
            {...register("name")}
          />
          <TextField variant="filled" label="E-mail" {...register("email")} />
          <TextField
            variant="filled"
            label="Senha"
            type="password"
            {...register("password")}
          />
          <TextField
            variant="filled"
            label="Confirmação de senha"
            type="password"
            {...register("passwordConfirmation")}
          />
          <TextField variant="filled" label="Telefone" {...register("phone")} />

          <Button>Cadastrar</Button>
        </form>
      </div>

      <div>
        <img src={LoginThumb} alt="Doe sangue" />
      </div>
    </div>
  );
};
