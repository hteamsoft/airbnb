import Image from "next/image";
import React from "react";

function LargeCard() {
  return (
    <section className="relative py-16 px-5 ">
      <div className="relative  h-96 backdrop-filter backdrop-blur-lg">
        <Image
          src="https://d26a57ydsghvgx.cloudfront.net/product/Customer%20Story%20Images/airbnb3.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl filter brightness-50 "
        />
      </div>
      <div className="absolute top-52 w-full text-center space-y-3">
        <h1 className="text-white text-4xl font-semibold">Become a Host</h1>

        <p className="text-white text-lg font-light">
          Unlock new opportunites by sharing your space
        </p>

        <button className="bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 cursor-pointer text-white font-semibold shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
