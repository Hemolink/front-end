import { KeyIcon, UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../components";

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
    <div className="flex justify-between h-screen">
      <div>
        <img src="../assets/login-thumb.jpg" alt="Doe sangue" />
      </div>

      <div className="flex">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <UserCircleIcon />
            <Input placeholder="Email" {...register("email")} />
          </div>

          <div>
            <KeyIcon />
            <Input placeholder="Senha" {...register("password")} />
          </div>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};
