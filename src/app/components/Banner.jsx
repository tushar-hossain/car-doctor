"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="my-10">
      <Carousel autoPlay={true} showThumbs={false}>
        <div>
          <figure className="relative text-white">
            <Image
              className="rounded-lg w-full  md:h-96"
              src="/assets/images/banner/1.jpg"
              alt="banner image"
              width={1140}
              height={600}
            />
            <div className="absolute top-0 overlayout-bg2 w-full h-full rounded-lg">
              <div className="absolute top-[30%] ps-10 md:top-[45%] text-left">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="my-3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <Link
                  href={"/services"}
                  className="btn btn-primary rounded-sm text-white"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </figure>
        </div>
        <div>
          <figure className="relative text-white">
            <Image
              className="rounded-lg w-full  md:h-96"
              src="/assets/images/banner/2.jpg"
              alt="banner image"
              width={1140}
              height={600}
            />
            <div className="absolute top-0 overlayout-bg2 w-full h-full rounded-lg">
              <div className="absolute top-[30%] ps-10 md:top-[45%] text-left">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="my-3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <Link
                  href={"/services"}
                  className="btn btn-primary rounded-sm text-white"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </figure>
        </div>
        <div>
          <figure className="relative text-white">
            <Image
              className="rounded-lg w-full  md:h-96"
              src="/assets/images/banner/3.jpg"
              alt="banner image"
              width={1140}
              height={600}
            />
            <div className="absolute top-0 overlayout-bg2 w-full h-full rounded-lg">
              <div className="absolute top-[30%] ps-10 md:top-[45%] text-left md:px-10">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="my-3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <Link
                  href={"/services"}
                  className="btn btn-primary rounded-sm text-white"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </Carousel>
    </div>
  );
}
