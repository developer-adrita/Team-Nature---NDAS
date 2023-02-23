import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfoBox from "./wildfire/LocationInfoBox";
import LocationMarker from "./wildfire/LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
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
    >
      <GoogleMapReact
        bootstrapURLKey={{
          key: "AIzaSyAFv8KHiwoyUTTErSjwBtiPQJgEgf9l-aM",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
