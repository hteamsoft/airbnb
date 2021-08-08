import React, { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Calendar } from "@natscale/react-calendar";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuest, setNumberGuest] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberGuest,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50  py-5 px-5  grid  grid-cols-3 shadow-md md:px-10 bg-black ">
      <div className="flex  items-center h-10 ">
        <MenuIcon className="h-8 text-gray-400 mr-6 cursor-pointer" />
        <Image
          src="https://i.pinimg.com/originals/8f/3a/e0/8f3ae023685a9c4c8e3a31d66af575b4.png"
          objectFit="contain"
          width="70px"
          height="70px"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center md:border-2 border-gray-400 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-400 text-sm"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer  md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-400">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-8 cursor-pointer bg-gray-400 rounded-md p-2 text-white" />
        <div className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer bg-gradient-to-r from-red-500 to-red-600 justify-center">
          <UserCircleIcon className=" hidden md:inline-flex h-6 text-white" />
          <h3 className="text-white text-sm md:text-md text-center">Sign In</h3>
        </div>
      </div>
      {searchInput && (
        <div className="absolute top-20 md:left-96 flex flex-col mx-auto mt-2 bg-black md:px-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61", "#fd5861"]}
            onChange={handleSelect}
          />

          <div className="flex items-center mt-2 mb-4">
            <h2 className="text-md md:text-2xl px-3 flex-grow font-semibold text-gray-400">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 text-gray-400 mr-2" />
            <input
              className=""
              type="number"
              value={numberGuest}
              onChange={(e) => setNumberGuest(e.target.value)}
              min={1}
              max={8}
              className="w-16 py-1 text-lg font-semibold outline-none text-red-400  bg-black items-center"
            />
          </div>
          <div className="flex items-center mb-5 border-t border-gray-800">
            <button
              className="flex-grow text-gray-400 mt-2 "
              onClick={resetInput}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-500 mt-2" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
