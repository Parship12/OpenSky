import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Agartala",
        feelsLike: 19.95,
        humidity: 84,
        maxTemp: 19.73,
        minTemp: 19.73,
        temp: 19.73,
        weather: "clear sky",
        wind: 2,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Search Weather</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}