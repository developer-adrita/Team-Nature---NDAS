import { useState } from "react";
import DetailCard from "./DetailCard";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
function Weather() {
  const API_KEY = "7a368f38c58da97da2f23b37163decef";
  console.log(API_KEY);
  const [noData, setNoData] = useState("No Data Yet");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Unknown location");
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  );

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  const getWeather = async (location) => {
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;

    try {
      let res = await fetch(`${
        "https://api.openweathermap.org/data/2.5/forecast?" + how_to_search
      }
      &appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`);
      let data = await res.json();
      if (data.cod != 200) {
        setNoData("Location Not Found");
        return;
      }
      setWeatherData(data);
      setCity(`${data.city.name}, ${data.city.country}`);
      setWeatherIcon(
        `${
          "http://openweathermap.org/img/wn/" + data.list[0].weather[0]["icon"]
        }@4x.png`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const myIP = (location) => {
    const { latitude, longitude } = location.coords;
    getWeather([latitude, longitude]);
  };

  return (
    <div>
      <div class="text-[#5CD8EB]">
        <div>
          {/* form card section  */}
          <div className="form-container">
            <div className="flex items-center justify-center">
              <h3
                className="my-auto mr-auto text-xl text-white font-bold shadow-md py-1 px-3 
            rounded-md bg-gray-600 bg-opacity-30"
              >
                forecast
              </h3>
              <div className="flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg">
                <i className="fa fa-map my-auto" aria-hidden="true"></i>
                <div className="text-right">
                  <p className="font-semibold text-sm ml-2">{city}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full m-8">
              <h1 className="text-white text-2xl">
                The Only Weather Forecast You Need
              </h1>
              <hr className="h-1 bg-white w-1/4 rounded-full my-5" />
              <form
                noValidate
                onSubmit={handleSubmit}
                className="flex justify-center w-full"
              >
                <input
                  type="text"
                  placeholder="Enter location"
                  className="relative rounded-xl py-2 px-3 w-2/3 bg-opacity-60 bg-transparent border-sky-300 text-sky-300 border leading-tight focus:outline-none focus:bg-transparent"
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="z-10">
                  <i
                    className="fa fa-search text-gray -ml-10 border-l my-auto z-10 cursor-pointer p-3"
                    aria-hidden="true"
                    type="submit"
                  ></i>
                </button>
                <i
                  className="fa fa-map-marker-alt my-auto cursor-pointer p-3 text-white"
                  aria-hidden="true"
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition(myIP);
                  }}
                ></i>
              </form>
            </div>
          </div>
          {/* info card section  */}
          <div className="p-5">
            <Header />

            <div className="flex flex-col my-5">
              {weatherData.length === 0 ? (
                <div className="NoDataYet">
                  <div className="flex flex-col items-center justify-center h-full my-8 p-8">
                    <div className="rounded-lg px-4">
                      <h1 className="text-[#5CD8EB] m-8 text-4xl flex items-center justify-center ">
                        Please Enter location first
                      </h1>
                    </div>
                    <hr className="h-0.5 bg-white w-1/2 rounded-full my-5" />
                    <div className="flex items-center justify-center m-5">
                      <i className="fas fa-question-circle text-white text-3xl mr-3"></i>
                      <p className="text-white text-sm">Need help?</p>
                      <br />
                      <i className="fas fa-sun text-yellow-400 text-3xl ml-3"></i>
                      <i className="fas fa-cloud text-gray-400 text-3xl ml-3"></i>
                      <i className="fas fa-umbrella text-blue-400 text-3xl ml-3"></i>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-5xl text-[#5CD8EB] text-center mb-8">
                    Today
                  </h3>
                  <DetailCard weather_icon={weatherIcon} data={weatherData} />
                  <h3 className="text-3xl text-[#5CD8EB] text-center mb-8 mt-10">
                    More On {city}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                    {weatherData.list.map((days, index) => {
                      if (index > 0) {
                        return <SummaryCard key={index} day={days} />;
                      }
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
