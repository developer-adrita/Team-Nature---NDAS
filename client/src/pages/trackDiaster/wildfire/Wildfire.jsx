import { useState, useEffect } from "react";
import { Header } from "../../../components";
import Loading from "../../../components/loading/Loading";
import Map from "../Map";

const Wildfire = () => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch(
              "https://eonet.gsfc.nasa.gov/api/v2.1/events"
            );
            const { events } = await res.json()

            setEventData(events)
            setLoading(false)
        }

        fetchEvents()
        
    }, [])

  return (
    <div>
      { !loading ? <Map eventData={eventData}/> : <Loading/> }
    </div>
  );
};

export default Wildfire;
