import { useEffect } from "react";
import Head from "next/head";
import {
  Header,
  Banner,
  SmallCard,
  HomeCard,
  LargeCard,
  Footer,
} from "../components";

export default function Home({ exploreData, homeData }) {
  return (
    <div className="bg-black overflow-x-hidden  ">
      <Head>
        <title>Airnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvZHES8fWSRijzHfrKb8AWXA3k4Y7vOco&libraries=places"></script>
      </Head>

      <main className="max-w-7xl mx-auto ">
        <Header />
        <Banner />

        <section className="pt-6 p-3">
          <h2 className="text-white text-lg lg:text-4xl font-semibold py-8">
            Live Anywhere
          </h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-5 w-full">
            {homeData?.map(({ img, title }) => (
              <HomeCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className="pt-6 p-3">
          <h2 className="text-white pb-5 text-lg lg:text-4xl font-semibold ">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <LargeCard />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const homeData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      homeData,
    },
  };
}
