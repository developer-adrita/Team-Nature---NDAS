import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfoBox from "./wildfire/LocationInfoBox";
import LocationMarker from "./wildfire/LocationMarker";
import locationIcon from "@iconify/icons-mdi/fire-alert";


const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, place: ev.title })}
          locationIcon={locationIcon}
          color="tomato"
        />
      );
    }

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
      <GoogleMapReact
        bootstrapURLKey={{
          // key: {API_KEY},
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox id={locationInfo.id} place={locationInfo.place} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 38.8906504,
    lng: -123.8756,
  },
  zoom: 6,
};

export default Map;
