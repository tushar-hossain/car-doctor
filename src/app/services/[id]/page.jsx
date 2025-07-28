import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

export default async function ServicesDetails({ params }) {
  const { id } = await params;

  const servicesData = await dbConnect(collectionName.cars).findOne({
    _id: new ObjectId(id),
  });

  // console.log(servicesData);

  return (
    <div className="my-10">
      <div className="relative">
        <figure className="relative">
          <Image
            className="mx-auto w-full"
            src={"/assets/images/checkout/checkout.png"}
            alt="banner image"
            width={1137}
            height={300}
          />
          <div className="absolute transparent-layer top-0 overlayout-bg w-full h-full rounded-lg">
            <div className="w-full h-ful absolute top-[30%] ps-10 md:top-[45%] text-2xl font-bold text-white md:ps-20 rounded-lg">
              <div>
                <h1>Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
        <div className="absolute bottom-5 left-[45%] text-center">
          <button className="btn bg-primary text-white">
            Home/Service Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 py-10">
        {/* left side */}
        <div className="col-span-12 md:col-span-8">
          <div>
            <Image
              className="w-full h-72 object-center object-fill rounded-lg"
              src={servicesData.img}
              alt={servicesData.title}
              width={752}
              height={400}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-10 mb-3">
              {servicesData.title}
            </h2>
            <p className="text-base-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
          </div>

          {/* card */}
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* card-1 */}
            <div className="bg-base-300 p-4 border-t-2 border-t-primary rounded-lg">
              <h2 className="text-xl font-bold mb-3">Instant Car Services</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-2 */}
            <div className="bg-base-300 p-4 border-t-2 border-t-primary rounded-lg">
              <h2 className="text-xl font-bold mb-3">24/7 Quality Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-3 */}
            <div className="bg-base-300 p-4 border-t-2 border-t-primary rounded-lg">
              <h2 className="text-xl font-bold mb-3">Easy Customer Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-4 */}
            <div className="bg-base-300 p-4 border-t-2 border-t-primary rounded-lg">
              <h2 className="text-xl font-bold mb-3">Quality Cost Service</h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div>
            <p className="text-base-200 mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>

            <h1 className="text-xl md:text-2xl font-bold mt-5">
              3 Simple Steps to Process
            </h1>
            <p className="text-base-200 mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* card-1 */}
            <div className="p-4 border-t-2 border-t-primary rounded-lg text-center">
              <div className="p-4 bg-primary rounded-full w-10 h-10 mx-auto text-white font-bold text-center">
                <p className="-mt-2">1</p>
              </div>
              <h2 className="text-xl font-bold mt-3 mb-3">Step One</h2>
              <p className="text-base-200">
                It uses a dictionary of over 200 .
              </p>
            </div>
            {/* card-2 */}
            <div className="p-4 border-t-2 border-t-primary rounded-lg text-center">
              <div className="p-4 bg-primary rounded-full w-10 h-10 mx-auto text-white font-bold text-center">
                <p className="-mt-2">2</p>
              </div>
              <h2 className="text-xl font-bold mt-3 mb-3">Step Two</h2>
              <p className="text-base-200">
                It uses a dictionary of over 200 .
              </p>
            </div>
            {/* card-3 */}
            <div className="p-4 border-t-2 border-t-primary rounded-lg text-center">
              <div className="p-4 bg-primary rounded-full w-10 h-10 mx-auto text-white font-bold text-center">
                <p className="-mt-2">3</p>
              </div>
              <h2 className="text-xl font-bold mt-3 mb-3">Step Three</h2>
              <p className="text-base-200">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-12 md:col-span-4 w-full h-72">
          <div className="bg-base-300 p-4 rounded-lg">
            <h1 className="text-xl font-bold mb-5">Services</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href={"/register"}
                  className="flex justify-between bg-base-100 p-2 rounded-lg hover:bg-primary hover:text-white lg:font-semibold items-center"
                >
                  <span>Full Car Repair</span> <FaArrowRight />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className="flex justify-between bg-base-100 p-2 rounded-lg hover:bg-primary hover:text-white lg:font-semibold items-center"
                >
                  <span>Engine Repair</span>
                  <FaArrowRight />
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className="flex justify-between bg-base-100 p-2 rounded-lg hover:bg-primary hover:text-white lg:font-semibold items-center"
                >
                  <span>Automatic Services</span>
                  <FaArrowRight />
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className="flex justify-between bg-base-100 p-2 rounded-lg hover:bg-primary hover:text-white lg:font-semibold items-center"
                >
                  <span>Engine Oil Change</span>
                  <FaArrowRight />
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className="flex justify-between bg-base-100 p-2 rounded-lg hover:bg-primary hover:text-white lg:font-semibold items-center"
                >
                  <span>Battery Charge</span>
                  <FaArrowRight />
                </Link>
              </li>
            </ul>
          </div>

          {/* download */}
          <div className="p-4 rounded-lg bg-[#151515] text-white my-5">
            <h1>Download</h1>
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-3 text-sm">
                <div>
                  <GiNetworkBars size={18} />
                </div>
                <div>
                  <h4>Our Brochure</h4>
                  <p>Download</p>
                </div>
              </div>
              <Link href={"/download"} className="bg-primary p-3 rounded-lg">
                <FaArrowRight />
              </Link>
            </div>

            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-3 text-sm">
                <div>
                  <GiNetworkBars size={18} />
                </div>
                <div>
                  <h4>Company Details</h4>
                  <p>Download</p>
                </div>
              </div>
              <Link href={"/download"} className="bg-primary p-3 rounded-lg">
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* offer section */}
          <div className="p-4 rounded-lg bg-[#151515] text-white text-center space-y-3">
            <Image
              className="w-20 h-20 mx-auto"
              src="/assets/logo.svg"
              alt="logo image"
              width={141}
              height={114}
            />

            <p>Need Help? We Are Here To Help You</p>

            <div className="bg-base-100 m-3 p-3 rounded-lg">
              <div className="">
                <p className="text-black text-xl font-bold">
                  <span className="text-primary">Car Doctor</span> Special
                </p>
                <p className="text-black text-sm font-bold">
                  Save up to <span className="text-primary">60% off</span>
                </p>
              </div>
              <div>
                <button className="btn btn-outline bg-primary border-0 hover:text-black rounded-lg mt-2">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
          {/* price  */}

          <div className="mt-5">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              Price $250.00
            </h1>
            <button className="btn btn-outline bg-primary text-white hover:text-black border-0 w-full rounded-lg">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
