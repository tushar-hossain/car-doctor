import Image from "next/image";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
  return (
    <div className="py-5">
      <div className="hero-content">
        <div className="hidden md:block">
          <Image
            className="w-70 h-70"
            src={"/assets/images/login/login.svg"}
            alt="login image"
            width={400}
            height={502}
          />
        </div>

        <div className="card bg-base-100 shrink-0 shadow-2xl px-6 border border-gray-300">
          <h1 className="text-2xl text-center font-bold mt-2">
            Registration now!
          </h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
