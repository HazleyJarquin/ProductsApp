/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "@/interfaces/ILoginRquest";

import { toast } from "sonner";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useLoginUser } from "@/services/auth/login.service";

export const LoginForm = () => {
  const { mutateAsync: loginUser, isLoading } = useLoginUser();
  const { setUser } = useUserStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILoginRequest) => {
    await loginUser(data, {
      onSuccess: (data) => {
        setUser(data.result);
        router.push("/products");
      },
      onError: (error) => {
        const errorMessage =
          (error as any).response?.data?.error || "Ocurrió un error inesperado";
        toast.success(errorMessage, {
          position: "top-center",
        });
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] sm:w-[90%] md:w-[30%] lg:w-[30%] xl:w-[30%] bg-white flex flex-col items-center gap-3 justify-center rounded-lg shadow-sm p-5"
    >
      <Input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <Input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />

      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-800"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>

      <Link href="/auth/register">Dont have account?</Link>
    </form>
  );
};
