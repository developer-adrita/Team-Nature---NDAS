import GoogleMapReact from "google-map-react";
import LocationMarker from "../wildfire/LocationMarker";
import locationIcon from "@iconify/icons-ri/earthquake-line";


const EarthquakeMap = ({ earthEventData, center, zoom }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const markers = earthEventData.map((feature) => {
  
      return (
        // <EarthLocationMarker
        <LocationMarker
          lat={feature.geometry.coordinates[0]}
          lng={feature.geometry.coordinates[1]}
          // onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
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
    </div>
  );
};

EarthquakeMap.defaultProps = {
  center: {
    lat: -59.997805,
    lng:  -0.778333
  },
  zoom: 1,
};

export default EarthquakeMap;
