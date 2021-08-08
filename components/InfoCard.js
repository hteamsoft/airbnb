import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, title, location, description, star, price, total }) {
  return (
    <div
      className="flex py-7 px-2 border-b border-gray-700 cursor-pointer hover:opacity-80 hover:shadow-2xl hover:bg-gray-900 rounded-xl
    transition duration-200 first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg filter brightness-50"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-400">{location}</p>
          <HeartIcon className="h-7 cursor-pointer text-red-400" />
        </div>
        <h4 className="text-white text-xl mb-2">{title}</h4>
        {/* <div className="border-b w-10 text-gray-700" /> */}
        <p className="text-gray-400 text-sm pt-3 flex-grow">{description}</p>
        <div className="flex justify-between pt-5 items-end">
          <p className="flex items-center text-gray-400">
            <StarIcon className="h-5 text-red-500" />
            {star}
          </p>
          <div>
            <p className="text-gray-400 text-lg font-semibold pb-2 lg:text-2xl">
              {price}
            </p>
            <p className="text-gray-400 text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
