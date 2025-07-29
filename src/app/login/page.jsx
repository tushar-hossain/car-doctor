import Image from "next/image";
import React from "react";
import LoginForm from "./components/LoginForm";

export default function Login() {
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
        <LoginForm />
      </div>
    </div>
  );
}
