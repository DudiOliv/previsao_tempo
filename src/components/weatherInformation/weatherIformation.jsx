import "./weatherIformation.css";
function WeatherInformation({ weather }) {
	console.log(weather);
	return (
		<div className="weatherContainer">
			<h2>{weather.name}</h2>
			<div className="weatherInfo">
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
					alt={weather.weather?.[0].description}
				/>
				<p className="temperature">Temperatura: {Math.round(weather.main?.temp)}°C</p>
			</div>
			<div className="details">
				<p className="description">{weather.weather?.[0].description}</p>
				<p>Sensação térmica: {Math.round(weather.main?.feels_like)}°C</p>
				<p>Umidade: {weather.main?.humidity}%</p>
				<p>Velocidade do vento: {weather.wind?.speed}km/h</p>
			</div>
		</div>
	);
}

export default WeatherInformation;
