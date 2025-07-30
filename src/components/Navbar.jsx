"use client";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="shadow-md sticky top-0 z-50 bg-base-100">
      <div className="navbar w-11/12 mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL="..."
              className="w-20 h-20"
              alt="logo image"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <div>
            <SlHandbag size={20} className="cursor-pointer" />
          </div>
          <div>
            <BsSearch size={20} className="cursor-pointer" />
          </div>
          <div>
            {session?.status === "authenticated" && session?.data ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {session?.status === "authenticated" ? (
                      <Image
                        src={session?.data?.user?.image}
                        alt="User image"
                        width={20}
                        height={20}
                      />
                    ) : (
                      ""
                    )}

                    {/*  */}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <p className="ms-2 font-bold">{session.data.user.name}</p>
                  <li>
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={() => signOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                href={"/login"}
                className="btn bg-primary rounded-lg border-0 text-white hover:text-black"
              >
                Login
              </Link>
            )}
          </div>
          <div>
            <a className="btn btn-outline bg-primary border-0 text-white hover:text-black rounded-lg">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
