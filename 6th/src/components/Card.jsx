import { useState } from "react";
import clear from "./../assests/img/sun.png";
import clouds from "./../assests/img/clouds.png";
import rain from "./../assests/img/rain.png";
import Hourly from "./Hourly";

function Card({
  allData,
  idx,
  temp,
  humidity,
  minTemp,
  maxTemp,
  weather,
  windSpeed,
  date,
}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((prevState) => !prevState);
  }

  const weatherImages = {
    Clear: clear,
    Clouds: clouds,
    Rain: rain,
    // Add more weather types and their corresponding image sources as needed
  };
  const weatherImage = weatherImages[weather];

  const tempCelsius = (temp - 273.15).toFixed(2);
  const tempFahrenheit = ((tempCelsius * 9) / 5 + 32).toFixed(2);

  return (
    <div className="card">
      {/* {console.log(allData, idx)} */}

      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{date}</p>
      <p>
        Temp: {tempCelsius} &deg;C / {tempFahrenheit} &deg;F
      </p>
      <img
        className="card__img"
        src={weatherImage}
        alt={`Weather: ${weather}`}
      />
      <p>Weather: {weather}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <button onClick={handleClick}>
        {isClicked ? "Hide Data" : "Show Data"}
      </button>
      <br></br>
      {isClicked && <Hourly hourly={allData}/>}
    </div>
  );
}

export default Card;
