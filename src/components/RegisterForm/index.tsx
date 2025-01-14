"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IRegisterFormValues } from "@/interfaces/IRegisterFormValues";

import { toast } from "sonner";
import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

import { useRouter } from "next/navigation";
import { useCreateUser } from "@/services/auth/createUser.service";
import { useVerifyClient } from "@/services/auth/verifyCode.service";

export const RegisterForm = () => {
  const [showInputOtp, setShowInputOtp] = useState(false);
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    defaultValues: {
      client_name: "",
      client_products: [],
      address: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: verifyCode } = useVerifyClient();

  const onSubmit = async (data: IRegisterFormValues) => {
    await createUser(data, {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-center",
        });
        setShowInputOtp(true);
      },
      onError: (error) => {
        alert(error);
      },
    });
  };

  const verifyOtp = async () => {
    await verifyCode(
      { email: email, verificationCode: otp },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            position: "top-center",
          });

          router.push("/auth/login");
        },
        onError: (error) => {
          alert(error);
        },
      }
    );
  };

  return (
    <form
      className="w-[30%] bg-white flex flex-col items-center gap-3 justify-center rounded-lg shadow-sm p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        {...register("client_name", {
          required: "This field is required",
        })}
        placeholder="Name"
      />
      {errors.client_name && (
        <span className="text-red-500">{errors.client_name.message}</span>
      )}
      <Input
        type="text"
        {...register("address", {
          required: "This field is required",
        })}
        placeholder="Address"
      />
      {errors.address && (
        <span className="text-red-500">{errors.address.message}</span>
      )}
      <Input
        type="text"
        {...register("city", {
          required: "This field is required",
        })}
        placeholder="City"
      />
      {errors.city && (
        <span className="text-red-500">{errors.city.message}</span>
      )}
      <Input
        type="text"
        {...register("state", {
          required: "This field is required",
        })}
        placeholder="State"
      />
      {errors.state && (
        <span className="text-red-500">{errors.state.message}</span>
      )}
      <Input
        type="text"
        {...register("zipcode", {
          required: "This field is required",
        })}
        placeholder="Zipcode"
      />
      {errors.zipcode && (
        <span className="text-red-500">{errors.zipcode.message}</span>
      )}
      <Input
        type="email"
        {...register("email", {
          required: "This field is required",
        })}
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <Input
        type="password"
        {...register("password", {
          required: "This field is required",
        })}
        placeholder="Password"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <Input
        type="text"
        {...register("phone", {
          required: "This field is required",
        })}
        placeholder="Phone"
      />
      {errors.phone && (
        <span className="text-red-500">{errors.phone.message}</span>
      )}
      <Button type="submit">Register</Button>

      {showInputOtp && (
        <>
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button type="button" onClick={verifyOtp}>
            Verificar
          </Button>
        </>
      )}
    </form>
  );
};
