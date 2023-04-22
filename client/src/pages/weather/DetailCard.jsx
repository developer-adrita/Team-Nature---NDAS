import moment from "moment";

function DetailCard({ weather_icon, data }) {
  const { clouds, main, weather } = data.list[0];

  return (
    <div
      style={{
        boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",
        borderRadius: "12px",
        background: "#272C32",
      }}
      className="flex items-center justify-center shadow-lg"
    >
      <div className="my-5">
        <p className="font-bold text-5xl text-[#5CD8EB] mb-2">
          {Math.round(main.temp)}&deg;C
        </p>
        <p className="text-4xl text-white tracking-widest">
          {weather[0].main}
          <img src={weather_icon} className="w-1/4 inline" />
        </p>
        <p className="text-white text-xs uppercase tracking-widest">
          {weather[0].description}
        </p>
        <p className="tracking-wider text-white">
          {moment().format("dddd MMM YYYY")}
        </p>
      </div>
      <div className="py-10 px-10 mx-0 my-8  flex-col items-center border-l-2 border-[#69CFE694]">
        <div
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "23px",
            lineHeight: "34px",
            textAlign: "center",
            left: "40%",
          }}
        >
          <p className="text-[#45D6F0] text-lg">
            RealFeel: {Math.round(main.feels_like)}&deg;C
          </p>
          <p className="text-[#45D6F0] text-lg">Humidity: {main.humidity}%</p>
          <p className="text-[#45D6F0] text-lg">Cloud Cover: {clouds.all}%</p>
          <p className="text-[#45D6F0] text-lg">
            Min Temp: {Math.round(main.temp_min)}&deg;C
          </p>
          <p className="text-[#45D6F0] text-lg">
            Max Temp: {Math.round(main.temp_max)}&deg;C
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
