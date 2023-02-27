import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-ri/earthquake-line";
const EarthLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon
        style={{
          fontSize: "2rem",
          color: "yellow",
        }}
        icon={locationIcon}
      />
    </div>
  );
};

export default EarthLocationMarker;
