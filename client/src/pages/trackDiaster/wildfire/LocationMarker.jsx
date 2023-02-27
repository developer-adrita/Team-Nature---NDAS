import { Icon } from "@iconify/react";
const LocationMarker = ({ onClick, locationIcon, color = "red" }) => {
  return (
    <div onClick={onClick}>
      <Icon
        style={{
          fontSize: "2rem",
          color,
        }}
        icon={locationIcon}
      />
    </div>
  );
};

export default LocationMarker;
