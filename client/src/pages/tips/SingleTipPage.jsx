import { useLocation } from "react-router-dom";

import poly1 from "../../assets/images/Polygon 1.svg";

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
          left: "198px",
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
          width: "1440px",
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
          width: "1440px",
          height: "356px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "-126.5px",
          left: "48.5px",
          width: "1440px",
          height: "97px",
        }}
        alt=""
        src="/rectangle-45.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "178px",
          left: "672px",
          fontSize: "36px",
          fontWeight: "500",
        }}
      >
        {location.state.topicName}
      </div>
      <img
        style={{
          position: "absolute",
          top: "427.66px",
          left: "281.66px",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src="/polygon-1.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "583.66px",
          left: "278.66px",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src="/polygon-1.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "742.66px",
          left: "278.66px",
          borderRadius: "4px",
          width: "52.69px",
          height: "52.69px",
        }}
        alt=""
        src={poly1}
      />
      <b style={{ position: "absolute", top: "439px", left: "300px" }}>1</b>
      <b style={{ position: "absolute", top: "595px", left: "296px" }}>2</b>
      <b style={{ position: "absolute", top: "754px", left: "296px" }}>3</b>
      <div
        style={{
          position: "absolute",
          top: "431px",
          left: "351px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        {location.state.topicDesc}
      </div>
      <div
        style={{
          position: "absolute",
          top: "589px",
          left: "351px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <div
        style={{
          position: "absolute",
          top: "747px",
          left: "351px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <div
        style={{
          position: "absolute",
          top: "466px",
          left: "351px",
          fontSize: "18px",
          color: "#cccbcb",
          textAlign: "justify",
          display: "inline-block",
          width: "819px",
          height: "93px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        venenatis odio. Praesent et eros eros. Etiam fringilla est sed mi
        efficitur pellentesque. Nunc tristique elit sapien. Fusce ut odio sit
        amet odio feugiat consequat et et est.
      </div>
      <div
        style={{
          position: "absolute",
          top: "624px",
          left: "351px",
          fontSize: "18px",
          color: "#cccbcb",
          textAlign: "justify",
          display: "inline-block",
          width: "819px",
          height: "93px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        venenatis odio. Praesent et eros eros. Etiam fringilla est sed mi
        efficitur pellentesque. Nunc tristique elit sapien. Fusce ut odio sit
        amet odio feugiat consequat et et est.
      </div>
      <div
        style={{
          position: "absolute",
          top: "782px",
          left: "351px",
          fontSize: "18px",
          color: "#cccbcb",
          textAlign: "justify",
          display: "inline-block",
          width: "819px",
          height: "136px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        venenatis odio. Praesent et eros eros. Etiam fringilla est sed mi
        efficitur pellentesque. Nunc tristique elit sapien. Fusce ut odio sit
        amet odio feugiat consequat et et est.Duis vitae blandit lectus.
        Vestibulum id ullamcorper augue. Cras non tincidunt quam, vel fringilla
        elit. Ut porttitor sit amet mauris nec faucibus. Donec elementum
      </div>
    </div>
  );
};

export default SingleTipPage;
