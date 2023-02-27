import GoogleMapReact from "google-map-react";
import LocationMarker from "../wildfire/LocationMarker";
import locationIcon from "@iconify/icons-ri/earthquake-line";
import { useState } from "react";
import LocationInfoBox from "../wildfire/LocationInfoBox";


const EarthquakeMap = ({ earthEventData, center, zoom }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = earthEventData.map((feature) => {
  
      return (
        // <EarthLocationMarker
        <LocationMarker
          lat={feature.geometry.coordinates[0]}
          lng={feature.geometry.coordinates[1]}
          onClick={() =>
            setLocationInfo({
              place: feature.properties.place,
              id: feature.id,
            })
          }
          locationIcon={locationIcon}
          color="yellow"
        />
      );
    
    return null;
  });
  return (
    <div
      style={{
        width: "100%",
        height: "105vh",
        position: "relative",
      }}
      className="map-box"
    >
      {" "}
      <GoogleMapReact
        bootstrapURLKey={{
          key: { API_KEY },
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox id={locationInfo.id} place={locationInfo.place} />
      )}
    </div>
  );
};

EarthquakeMap.defaultProps = {
  center: {
    lat: -59.997805,
    lng:  -0.778333
  },
  zoom: 2,
};

export default EarthquakeMap;
