import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="flex items-center justify-center"></div>
        <div className="flex flex-col items-center justify-center h-full m-8">
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
            Questions? Look Here...{" "}
          </h1>

          <form
            noValidate
            //   onSubmit={handleSubmit}
            className="flex justify-center w-2/3"
          >
            <input
              type="text"
              placeholder="What can help you to find"
              className="relative rounded-xl py-2 px-3 w-2/3 bg-opacity-60 bg-[#171A205E] border leading-tight focus:outline-none focus:bg-[#FFFFFF75]"
              // onChange={handleChange}
              required
            />
            <button>
              <i
                className="fa fa-search text-white -ml-10 border-l my-auto cursor-pointer p-4"
                type="submit"
              ></i>
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div className="container flex flex-col px-4 py-8 justify-center items-center mx-auto md:p-8">
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "36px",
                }}
                className="space-y-4"
              >
                <details
                  style={{
                    border: "2px solid #69CFE6",
                    boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",
                    borderRadius: "5px",
                  }}
                  className="w-full rounded-lg ring-1 ring-cyan"
                >
                  <summary className="text-white px-4 py-6">
                    Who do I contact for help with the site?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    Answer is coming stay tuned with NDAS...
                  </p>
                </details>
                <details
                  style={{
                    border: "2px solid #69CFE6",
                    boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",
                    borderRadius: "5px",
                  }}
                  className="w-full rounded-lg ring-1 ring-cyan"
                >
                  <summary className="text-white px-4 py-6">
                    What should I do when I get any error to set up my account ?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    Answer is coming stay tuned with NDAS...{" "}
                  </p>
                </details>
                <details
                  style={{
                    border: "2px solid #69CFE6",
                    boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",

                    borderRadius: "5px",
                  }}
                  className="w-full rounded-lg ring-1 ring-cyan"
                >
                  <summary className="text-white px-4 py-6">
                    Why wildfire tracker is not working?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    Answer is coming stay tuned with NDAS...{" "}
                  </p>
                </details>
                <details
                  style={{
                    border: "2px solid #69CFE6",
                    boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",

                    borderRadius: "5px",
                  }}
                  className="w-full rounded-lg ring-1 ring-cyan"
                >
                  <summary className="text-white px-4 py-6">
                    Why weather information is not showing the data?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    Answer is coming stay tuned with NDAS...
                  </p>
                </details>
                <details
                  style={{
                    border: "2px solid #69CFE6",
                    boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",

                    borderRadius: "5px",
                  }}
                  className="w-full rounded-lg ring-1 ring-cyan"
                >
                  <summary className="text-white px-4 py-6">
                    What is React?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                    Answer is coming stay tuned with NDAS...
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
