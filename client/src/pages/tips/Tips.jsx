import imgIconOne from "../../assets/images/imgIconOne.svg";
import imgIconTwo from "../../assets/images/wildfireIcon.svg";
import imgIconThree from "../../assets/images/EarthquakeIcon.svg";
import imgIconFour from "../../assets/images/floodIcon.svg";
import imgIconFive from "../../assets/images/stromIcon.svg";
import imgIconSix from "../../assets/images/droughtIcon.svg";
import { useNavigate } from "react-router-dom";
import { useGetClassesQuery } from "../../services/apiSlice";

const tipsData = [
  {
    _id: 0,
    title: "Weather",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconOne,
    headerImg: ''
  },
  {
    _id: 1,
    title: "Wildfire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconTwo,
  },
  {
    _id: 2,
    title: "Earthquake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconThree,
  },
  {
    _id: 3,
    title: "Flood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconFour,
  },
  {
    _id: 4,
    title: "Storm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconFive,
  },
  {
    _id: 5,
    title: "Drought",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel nisi pharetra rhoncus. Integer sollicitudin, eros id dapibus malesuada, quam eros dictum justo, vel consectetur magna neque vitae tortor.",
    icon: imgIconSix,
  },
];

const cards = {
  boxSizing: "border-box",
  position: "relative",
  width: "100%",
  height: "100%",
  left: "50%",
  top: "50%",
  bottom: "20%",
  transform: "translate(-50%, -50%)",
  borderRadius: "0.5rem",
  padding: "5.5rem",
  margin: "1rem",
  backgroundColor: "#1f2937",
  borderBottom: "0.25rem solid #22d3ee",
  cursor: "pointer",
  // Add additional styles or media queries here as needed
};

function Tips() {
  const navigate = useNavigate();

  // const tipsData = useGetClassesQuery();

  return (
    <div className="m-3 p-2 md:p-5 rounded-3xl mb-8">
      <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
        <p className="text-3xl font-semibold text-white title-border mb-2 p-2">
          Here to help you...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tipsData.map((data) => {
          return (
            <div
              key={data._id}
              onClick={() => navigate(`/tips/${data._id}`, { state: data })}
              style={cards}
            >
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    marginRight: "1rem",
                    marginLeft: "5px",
                  }}
                  src={data.icon}
                  alt="Icon"
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {data.title}
                </h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(31, 41, 55, 0.8) 50%, rgba(31, 41, 55, 0.8) 100%)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  right: "5%",
                  transform: "translateY(-40%)",
                  width: "90%",
                  paddingTop: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    color: "#d1d5db",
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tips;
