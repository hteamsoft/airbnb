import Image from "next/image";
import React from "react";

function HomeCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out relative">
      <div className="relative h-96 w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl filter brightness-50"
        />
      </div>

      <h3 className="text-red-500 text-xl font-semibold shadow-lg mt-2">
        {title}
      </h3>
    </div>
  );
}

export default HomeCard;
