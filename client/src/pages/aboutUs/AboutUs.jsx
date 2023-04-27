import React from 'react';
import { Header } from '../../components';

const AboutUs = () => {
    return (
      <div className="m-3 p-2 md:p-5 rounded-3xl text-sky-300 Cntctbg">
        {" "}
        <div className="mb-10">
          <Header category="About Us" />
        </div>
        <div
          style={{
            boxSizing: "border-box",
            position: "relative",
            width: "100%",
            maxWidth: "1010px",
            height: "auto",
            left: "0",

            right: "0",
            margin: "0 auto",
            padding: "0 20px",
            border: "1px solid #69CFE6",
            borderRadius: "10px",
            filter: "drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.25))",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "944px",
              height: "auto",
              left: "0",
              right: "0",
              margin: "5% auto",
              fontFamily: "'Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "22px",
              lineHeight: "33px",
              textAlign: "justify",
              color: "#FFFFFF",
              padding: "0 20px",
            }}
          >
            <p>
              The vision of a NDAS app is to provide real-time information and
              alerts on natural disasters to empower users to make informed
              decisions that can save lives and protect property. Its mission is
              to leverage technology to provide up-to-date and accurate
              information to users in times of crisis while also facilitating
              communication and collaboration between emergency responders and
              affected communities. <br />
              <br /> To achieve this, the app values safety, accuracy,
              accessibility, collaboration, and innovation. The app offers
              real-time alerts, location-based services, resource mapping,
              reporting and sharing, and preparedness tools to help users
              prepare for and respond to natural disasters.
              <br />
              <br /> The ultimate goal is to build more resilient communities
              that are better prepared for the challenges of an ever-changing
              climate. By providing reliable information and facilitating
              communication and collaboration, a disaster tracking app can help
              minimize the impact of natural disasters on lives and property.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;