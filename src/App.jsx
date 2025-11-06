import { useState, useRef } from "react";
import WeatherInformation from "./components/weatherInformation/weatherIformation.jsx";
import WeatherInformationFiveDays from "./components/WeatherInformationFiveDays/WeatherInformationFiveDays.jsx";
import axios from "axios";
import "./App.css";
function App() {
	//variaveis de estado
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
	const inputRef = useRef();

	// function para buscar a cidade
	async function searchCity() {
		const city = inputRef.current.value;
		const key = "faf32db0e7b02e33548e9d21ce85329d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDays);
    setWeatherFiveDays(apiInfoFiveDays.data);
		setWeather(apiInfo.data);
	}
	return (
		<div className="container">
			<h1>Previsão do tempo</h1>
			<input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformation weather={weather} />}
      {weatherFiveDays && <WeatherInformationFiveDays weatherFiveDays={weatherFiveDays} />}

      
    </div>
    
    
	);
}

export default App;
