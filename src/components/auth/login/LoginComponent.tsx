"use client";

import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import TitlePage from "@/components/ui/TitlePage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { TLoginSchema, loginSchema } from "@/components/auth/types/validation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

  const router = useRouter();

  const handleSubmitLogin = async (data: TLoginSchema) => {
    try {
      const newData = {
        email: data.email,
        password: data.password,
      };

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();

      console.log(result);

      if (response.status === 401) {
        toast.error(result.message);
        return;
      }

      if (response.status === 200) {
        router.push("/dashboard");
        reset();
      }
    } catch (err: any) {
      toast.error(err.message);
    }
    reset();
  };

  return (
    <section className="mt-8">
      <TitlePage>Login</TitlePage>
      <form className="block max-w-xl mx-auto px-5" onSubmit={handleSubmit(handleSubmitLogin)}>
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
            className="absolute right-3 top-[45px] -translate-y-1/2 cursor-pointer bg-gray-100 !text-slate-600 hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
          </Button>
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full mt-5 rounded-xl">
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Image src="./btnLoading.svg" alt="loding" width={24} height={24} />
            </div>
          ) : (
            "Login"
          )}
        </Button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account? <Link href={"/register"}>Register here &raquo;</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginComponent;
