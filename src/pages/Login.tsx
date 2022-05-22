import { KeyIcon, UserCircleIcon } from "@heroicons/react/outline";
import { TextField } from "@mui/material";
import React from "react";
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
    <div className="grid grid-cols-2 gap-6 h-fill mt-8">
      <div>
        <img src={LoginThumb} alt="Doe sangue" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-8">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-3 mb-4">
            <UserCircleIcon className="w-12 h-12" />
            <TextField variant="filled" label="Email" {...register("email")} />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <KeyIcon className="w-12 h-12" />
            <TextField
              variant="filled"
              label="Senha"
              {...register("password")}
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};
