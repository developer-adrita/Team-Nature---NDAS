import moment from "moment";

function SummaryCard({ day }) {
  let day_icon = `${
    "http://openweathermap.org/img/wn/" + day.weather[0]["icon"]
  }@2x.png`;
  return (
    <li
      style={{
        background: "#272C32",
        borderRadius: "12px 60px",
        // background:
        //   "linear-gradient(160.01deg, rgba(65, 68, 68, 0.26) -22.96%, rgba(105, 207, 230, 0.53) 93.82%)",
      }}
      className="container p-4 flex items-center justify-center bg-transparent rounded-lg my-auto mr-1"
    >
      <div className="my-auto">
        <p className="font-bold text-3xl text-sky-600 mb-2">
          {Math.round(day.main.temp)}&deg;C
        </p>
        <p className="text-2xl text-white tracking-widest">
          {day.weather[0].main}
          <img src={day_icon} className="w-1/4 inline" />
        </p>
        <p className="text-white text-xs uppercase tracking-widest">
          {day.weather[0].description}
        </p>
        <p className="tracking-wider">
          {moment(day.dt_txt).format("dddd hh:mm")}am
        </p>
      </div>
    </li>
  );
}

export default SummaryCard;
