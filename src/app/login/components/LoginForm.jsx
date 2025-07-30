"use client";
import React from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "http://localhost:3000/",
        redirect: false,
      });

      if (response.ok) {
        router.push("/");
        toast.success("Login successful");
      } else {
        toast.error("Authentication Faild");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card bg-base-100 shrink-0 shadow-2xl px-6 border border-gray-300">
      <h1 className="text-2xl text-center font-bold mt-2">Login now!</h1>

      <div className="card-body">
        <form onSubmit={handelSubmit} className="fieldset">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
          </div>
          <label className="label">Password</label>
          <div>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 bg-primary border-0 rounded-lg">
            Login
          </button>
        </form>

        {/* social accounts */}
        <SocialLogin />
        <div>
          <p className="text-xs text-center sm:px-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              rel="noopener noreferrer"
              href="/register"
              className="underline text-gray-800"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
