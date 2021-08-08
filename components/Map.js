import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, ScaleControl } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });
  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <ReactMapGL
      className="rounded-2xl"
      mapStyle="mapbox://styles/gfortune85/cks2e97nd99md18o0k3r4w819"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div
              className="relative h-20 w-20 cursor-pointer border-4 border-white rounded-lg hover:animate-bounce "
              onClick={() => setSelectedLocation(result)}
            >
              <Image src={result.img} layout="fill" objectFit="cover" />
            </div>
            {/* <LocationMarkerIcon className="h-8 text-red-500 cursor-pointer hover:animate-bounce" /> */}
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              className="z-50"
              anchor="right"
              tipSize={5}
            >
              <div className="">
                <p className="font-semibold ">{result.title}</p>
                <span className="text-sm font-light text-right">
                  {result.price}
                </span>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
      <ScaleControl
        maxWidth={100}
        unit="metric"
        style={{ right: 20, top: 10 }}
      />
    </ReactMapGL>
  );
}

export default Map;
