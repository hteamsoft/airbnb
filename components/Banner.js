import Image from "next/image";

import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function Banner() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://cdn.vox-cdn.com/thumbor/rQdP_2gdCKFQU7nPcKK8cuX2BDI=/0x0:1898x1273/1200x800/filters:focal(833x627:1135x929)/cdn.vox-cdn.com/uploads/chorus_image/image/64128012/airbnb_luxe_announcement.0.jpg"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/4 w-full text-center space-y-3 text-white">
        <h1 className="text-3xl font-medium ">The Greatest Outdoors</h1>
        <p className=" font-light mb-5">Wishlists curated by Roomie</p>
        <button className="bg-black px-10 py-4 shadow-md rounded-xl hover:shadow-xl active:scale-90 transition duration-150">
          Get Inspired
        </button>
        {/* <div className="relative w-96 h-96">
          <h1>Hello</h1>
          <DateRangePickerComponent
            startDate={startDate}
            endDate={endDate}
            min={new Date()}
            format="dd-MMM-yy"
          ></DateRangePickerComponent>
        </div> */}
      </div>

      {/* <div className="hidden lg:inline-flex w-full absolute bottom-24 items-center justify-center ">
        <div className=" flex items-center bg-white w-3/4 justify-between rounded-lg shadow-4xl relative">
          <div className="border py-4 px-7 rounded-lg border-gray-400 cursor-pointer active:ring-2 active:ring-black">
            <PlacesAutocomplete
              value={location}
              onChange={setLocation}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "outline-none",
                    })}
                  />
                  <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map((data) => {
                      const styles = data.active
                        ? { backgroundColor: "red", cursor: "pointer" }
                        : { backgroundColor: "#FFF", cursor: "pointer" };

                      const className = "";

                      return (
                        <div {...getSuggestionItemProps(data, { styles })}>
                          <span>{data.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>

          <div>
            <DateRangePickerComponent
              startDate={startDate}
              endDate={endDate}
              min={new Date()}
              format="dd-MMM-yy"
            ></DateRangePickerComponent>
          </div>
          <div className="border w-32 p-2 rounded-lg border-gray-400 cursor-pointer">
            <h1 className="text-md font-medium">Guests</h1>
            <select
              className=" w-full outline-none text-sm font-extralight text-gray-500"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center px-4 py-4 rounded-lg text-white space-x-2 cursor-pointer">
            <SearchIcon className="h-6 " />
            <p>Search</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
