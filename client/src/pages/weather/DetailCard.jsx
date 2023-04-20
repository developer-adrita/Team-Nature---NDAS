import moment from "moment";

function DetailCard({ weather_icon, data }) {
  const { clouds, main, weather } = data.list[0];

  return (
    <div
      style={{
        boxShadow: "0px 3px 10px rgba(69, 214, 240, 0.19)",
        borderRadius: "15px",
      }}
      className="flex items-center justify-center shadow-lg"
    >
      <div className="my-5">
        <p className="font-bold text-5xl text-sky-800 mb-2">
          {Math.round(main.temp)}&deg;C
        </p>
        <p className="text-4xl text-sky-200 tracking-widest">
          {weather[0].main}
          <img src={weather_icon} className="w-1/4 inline" />
        </p>
        <p className="text-white text-xs uppercase tracking-widest">
          {weather[0].description}
        </p>
        <p className="tracking-wider">{moment().format("dddd MMM YYYY")}</p>
      </div>
      <div className="py-10 px-10 mx-0  flex-col items-center border-l-2 border-sky-400">
        <p className="text-sky-400 text-lg">
          RealFeel: {Math.round(main.feels_like)}&deg;C
        </p>
        <p className="text-sky-400 text-lg">Humidity: {main.humidity}%</p>
        <p className="text-sky-400 text-lg">Cloud Cover: {clouds.all}%</p>
        <p className="text-sky-400 text-lg">
          Min Temp: {Math.round(main.temp_min)}&deg;C
        </p>
        <p className="text-sky-400 text-lg">
          Max Temp: {Math.round(main.temp_max)}&deg;C
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
