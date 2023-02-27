import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../../components/loading/Loading";
import EarthquakeMap from "./EarthquakeMap";

const Earthquake = () => {
  const [earthEventData, setEarthEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(earthEventData);
  useEffect(() => {
    const fetchEarthEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"
      );
      const eventData = await res.json();

      setEarthEventData(eventData.features);
      setLoading(false);
    };

    fetchEarthEvents();
  }, []);

  return (
    <div>
      {/* {!loading &&
        earthEventData.map((feature, i) => (
          <div key={i}>
            <p>{feature.geometry.coordinates[0]}</p>
            <p>{feature.geometry.coordinates[1]}</p>
          </div>
        ))} */}
      {!loading ? (
        <EarthquakeMap earthEventData={earthEventData} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Earthquake;
