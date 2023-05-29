import { useLocation } from "react-router-dom";

import poly1 from "../../assets/images/Polygon 1.svg";
import poly2 from "../../assets/images/Polygon 1.svg";
import poly3 from "../../assets/images/Polygon 1.svg";

const SingleTipPage = () => {
  const location = useLocation();

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#272c32",
        width: "100%",
        height: "1024px",
        overflowY: "auto",
        textAlign: "left",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "402px",
          left: "7%",
          backgroundColor: "#32363c",
          borderBottom: "2px solid #45d6f0",
          boxSizing: "border-box",
          width: "1044px",
          height: "592px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "356px",
          objectFit: "cover",
        }}
        alt=""
        src={location.state.topicAvatar}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "rgba(5, 5, 5, 0.3)",
          width: "100%",
          height: "356px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "-126.5px",
          left: "48.5px",
          width: "100%",
          height: "97px",
        }}
        alt=""
        src={poly2}
      />
      <div
        style={{
          position: "absolute",
          top: "178px",
          left: "50%",
          fontSize: "36px",
          fontWeight: "500",
        }}
      >
        {location.state.topicName}
      </div>
      <img
        style={{
          position: "absolute",
          top: "42%",
          left: "12%",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src={poly3}
      />
      <img
        style={{
          position: "absolute",
          top: "583.66px",
          left: "12%",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src={poly3}
      />
      <img
        style={{
          position: "absolute",
          top: "742.66px",
          left: "12%",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src={poly1}
      />
      <b style={{ position: "absolute", top: "439px", left: "13.5%" }}>1</b>
      <b style={{ position: "absolute", top: "595px", left: "13.5%" }}>2</b>
      <b style={{ position: "absolute", top: "754px", left: "13.5%" }}>3</b>
      <div
        style={{
          position: "absolute",
          top: "42.5%",
          left: "18%",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        {location.state.topicDescOne || "No description to show"}
      </div>
      <div
        style={{
          position: "absolute",
          top: "589px",
          left: "18%",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        {location.state.topicDescTwo || "No description to show"}
      </div>
      <div
        style={{
          position: "absolute",
          top: "746px",
          left: "18%",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        {location.state.topicDescThree || "No description to show"}
      </div>
    </div>
  );
};

export default SingleTipPage;
