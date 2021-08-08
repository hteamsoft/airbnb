import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function PlaceRow({ data }) {
  return (
    <div className=" flex-row items-center  p-2">
      <div className="bg-gray-500 rounded-full h-7 w-7 items-center justify-center mr-3">
        <LocationMarkerIcon className="h-12 bg-white" />
      </div>
      <Text className="text-sm font-medium w-2/3 text-white">
        {data.description || data.vicinity}
      </Text>
    </div>
  );
}

export default PlaceRow;
