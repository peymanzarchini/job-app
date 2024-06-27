"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import TextField from "@/components/ui/TextField";
import TitlePage from "@/components/ui/TitlePage";
import Button from "@/components/ui/Button";
import { TSignUpSchema, registerSchema } from "@/components/types/validation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(registerSchema) });

  const handleSubmitRegister = async (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className="mt-8">
      <TitlePage>Register</TitlePage>
      <form className="block max-w-xl mx-auto px-5" onSubmit={handleSubmit(handleSubmitRegister)}>
        <TextField
          label="First Name"
          type="text"
          id="firstName"
          placeholder="First Name"
          register={register("firstName")}
          errors={errors}
        />
        <TextField
          label="Last Name"
          type="text"
          id="lastName"
          placeholder="Last Name"
          register={register("lastName")}
          errors={errors}
        />
        <TextField
          label="Email"
          type="email"
          id="email"
          placeholder="Email"
          register={register("email")}
          errors={errors}
        />

        <div className="relative">
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            register={register("password")}
            errors={errors}
          />
          <Button
            type="button"
            className="absolute right-3 top-[45px] -translate-y-1/2 cursor-pointer bg-gray-100 text-slate-600 hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
          </Button>
        </div>

        <div className="relative">
          <TextField
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            register={register("confirmPassword")}
            errors={errors}
          />
          <Button
            type="button"
            className="absolute right-3 top-[45px] -translate-y-1/2 cursor-pointer bg-gray-100 text-slate-600 hover:bg-transparent"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
          </Button>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full mt-5 rounded-xl">
          Register
        </Button>
      </form>
    </section>
  );
};

export default Register;
