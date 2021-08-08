import React from "react";
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-in-out">
      <div className="relative h-16 w-16 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="">
        <h1 className="text-white">{location}</h1>
        <p className="text-gray-400 text-sm"> {distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
