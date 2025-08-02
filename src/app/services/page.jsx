import dbConnect, { collectionName } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Services() {
  const servicesData = await dbConnect(collectionName.cars).find().toArray();

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-3 mt-3">Our Services</h1>
        <div className="flex items-center justify-center">
          <p className="mb-3 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData?.map((service) => {
          return (
            <div
              className="p-3 border border-gray-200 rounded-lg"
              key={service._id}
            >
              <Image
                className="h-50 w-full
                 object-cover object-center rounded-lg"
                src={service.img}
                alt={service.title}
                width={314}
                height={208}
                placeholder="blur"
                blurDataURL="..."
              />
              <div>
                <h1 className="text-xl md:text-2xl font-semibold my-2 text-secondary">
                  {service?.title}
                </h1>
                <p className="flex items-center justify-between text-primary">
                  <span className="font-bold"> Price: ${service?.price}</span>
                  <Link href={`/services/${service._id}`}>
                    <FaArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
