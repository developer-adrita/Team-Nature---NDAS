import GoogleMapReact from "google-map-react";
import EarthLocationMarker from "./EarthLocationMarker";

const EarthquakeMap = ({ center, zoom }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div
      style={{
        width: "100%",
        height: "105vh",
        position: "relative",
      }}
    >
      {" "}
      <GoogleMapReact
        bootstrapURLKey={{
          key: { API_KEY },
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <EarthLocationMarker lat={center.lat} lng={center.lng} />

      </GoogleMapReact>
    </div>
  );
};

EarthquakeMap.defaultProps = {
  center: {
    lat: 35.8617,
    lng: 104.1954,
  },
  zoom: 6,
};

export default EarthquakeMap;
