import React from "react";

const LocationInfoBox = ({ info }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        right: "50px",
        width: "400px",
        minHeight: "200px",
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: "10px",
        fontSize: "18px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "600",
          fontFamily: "Gill Sans Extrabold",
          listStyleType: "none",
          padding: "0",
        }}
      >
        Event Location Info
      </h2>
      <li
        style={{
          padding: "5px 0",
        }}
      >
        ID: <strong>{info.id}</strong>
      </li>
      <li
        style={{
          padding: "5px 0",
        }}
      >
        Title: <strong>{info.title}</strong>
      </li>
    </div>
  );
};

export default LocationInfoBox;
