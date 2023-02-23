import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'
const LocationMarker = ( { lat, lng, onClick } ) => {
    return (
        <div onClick={onClick}>
            <Icon style={{
                fontSize: "2rem",
                color: "red",
            }} icon={locationIcon}  />
        </div>
    );
};

export default LocationMarker;