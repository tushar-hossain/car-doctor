"use client";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import UserRegister from "@/app/action/auth/UserRegister";
import SocialLogin from "@/app/login/components/SocialLogin";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error("Invalid password");
    }

    const userInfo = {
      name,
      email,
      password,
      role: "user",
    };

    const result = await UserRegister(userInfo);
    if (result?.insertedId) {
      router.push("/");
      toast.success("Registration successful");
    }
    form.reset();
  };

  return (
    <div className="card-body">
      <form onSubmit={handelSubmit} className="fieldset">
        {/* name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />
        </div>
        {/* email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
        </div>
        {/* password */}
        <div>
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
        </div>
        {/* confirm password */}
        <div>
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="input w-full"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-neutral mt-4 bg-primary border-0 rounded-lg"
        >
          Registration
        </button>
      </form>

      {/* social accounts */}
      <SocialLogin />
      <div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?{" "}
          <Link
            rel="noopener noreferrer"
            href="/login"
            className="underline text-gray-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
