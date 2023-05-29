import React from "react";
import support from "../../assets/images/support 1.svg";
import Emergency from "../../assets/images/emergency (3) 1.svg";
import FireService from "../../assets/images/firefighter 1.png";
import FundRising from "../../assets/images/payment (1) 1.svg";
import HelpTable from "./HelpTable";
const cards = {
  container: {
    position: "relative",
    width: "207px",
    height: "119px",
    left: "0px",
    top: "0px",
    background:
      "linear-gradient(90.06deg, rgba(141, 145, 145, 0.2) -8.58%, rgba(105, 207, 230, 0.02) 109.39%)",
    borderRadius: "15px",
  },
  image: {
    position: "absolute",
    width: "55px",
    height: "54px",
    left: "76px",
    top: "18px",
    backgroundImage: "url(../../assets/images/support 1.svg)",
  },
  title: {
    position: "absolute",
    width: "147px",
    height: "23px",
    left: "35px",
    top: "82px",
    fontFamily: "'Poppins', sans-serif",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "15px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#FFFFFF",
  },
};

const data = [
  { _id: 0, avatar: "😀", name: "Akash", area: "DSC, Dhaka" },
  { _id: 1, avatar: "😀", name: "Akash - Kundu", area: "DSC, Dhaka" },
];

const Help = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "36px",
        lineHeight: "54px",
      }}
    >
      <div>
        <div className="flex items-center justify-center"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "36px",
              lineHeight: "54px",
            }}
            className="text-[#FFFFFF] py-10 px-10"
          >
            HI, We are here to help you...{" "}
          </h1>

          <form class="flex items-center w-2/3">
            <label for="voice-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-[#5CD8EB] dark:text-[#5CD8EB]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
            </div>
            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(90deg, rgba(5, 168, 192, 0.56) 0%, rgba(80, 205, 223, 0.88) 100%)",
                borderRadius: "10px",
                width: "15%",
                padding: "10px auto",
              }}
              class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-large justify-center text-white"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container flex flex-col px-4 py-8 justify-center items-center mx-auto md:p-8">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 m-8 justify-center items-center">
          <div style={cards.container}>
            <div>
              {" "}
              <img
                style={{
                  position: "absolute",
                  width: "55px",
                  height: "54px",
                  left: "76px",
                  top: "18px",
                }}
                src={support}
                alt="Icon"
              />{" "}
            </div>
            <h1 style={cards.title}>24/7 Call Service</h1>
          </div>

          <div style={cards.container}>
            <div>
              {" "}
              <img
                style={{
                  position: "absolute",
                  width: "55px",
                  height: "54px",
                  left: "76px",
                  top: "18px",
                }}
                src={Emergency}
                alt="Icon"
              />{" "}
            </div>
            <h1 style={cards.title}>Emergency First Aid</h1>
          </div>

          <div style={cards.container}>
            <div>
              {" "}
              <img
                style={{
                  position: "absolute",
                  width: "55px",
                  height: "54px",
                  left: "76px",
                  top: "18px",
                }}
                src={FireService}
                alt="Icon"
              />{" "}
            </div>
            <h1 style={cards.title}>Fire Service</h1>
          </div>

          <div style={cards.container}>
            <div>
              {" "}
              <img
                style={{
                  position: "absolute",
                  width: "55px",
                  height: "54px",
                  left: "76px",
                  top: "18px",
                }}
                src={FundRising}
                alt="Icon"
              />{" "}
            </div>
            <h1 style={cards.title}>Fund Rising</h1>
          </div>
        </div>
      </div>
      <HelpTable data={data} />
    </div>
  );
};

export default Help;
