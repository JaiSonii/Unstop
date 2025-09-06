"use client";
import Image from "next/image";
import assets from "@/assets";
import LoginComponent from "../../../components/auth/Login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) router.replace("/home");
  }, [router]);

  return (
    <div className="min-h-[100svh] w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 p-6 md:p-16 bg-[#F4F4F4]">
      <div className="w-full md:w-1/2 items-center justify-center hidden md:flex">
        <Image
          src={assets.loginImg}
          alt="Login Illustration"
          className="w-full h-auto max-w-[540px] object-cover"
          width={540}
          height={540}
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
