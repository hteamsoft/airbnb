import React, { useState } from "react";
import Head from "next/head";
import { Header, Footer, InfoCard, Map } from "../components";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberGuest } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");
  const rangeDate = `${formatStartDate} To ${formatEndDate}`;

  return (
    <div className="bg-black overflow-x-hidden">
      <Head>
        <title>Airnb 2.0 - Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto">
        <Header
          placeholder={`${location} | ${rangeDate} | ${numberGuest} Guests`}
        />
        <main className="flex">
          <section className="flex-grow pt-15 px-6">
            <p className="text-xs text-gray-400">
              200+ Stays - {rangeDate} - from {numberGuest} Guests
            </p>
            <h1 className="text-3xl  font-semibold mt-2 mb-6 text-white ">
              Stays in {location}
            </h1>
            <div className="hidden  lg:inline-flex items-center mb-5 space-x-3 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Prices</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
            <div className="flex flex-col space-y-4 mb-10 px-3">
              {searchResults?.map(
                ({ img, title, location, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    title={title}
                    location={location}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
            <div className="bg-gray-800 lg:max-w-7xl h-80 mb-5 rounded-2xl">
              <Map searchResults={searchResults} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
