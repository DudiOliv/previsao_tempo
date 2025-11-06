import "../weatherInformation/weatherIformation.css";

function WeatherInformationFiveDays({ weatherFiveDays }) {
	let dailyForeCast = {};

	for (let foreCast of weatherFiveDays.list) {
		const date = new Date(foreCast.dt * 1000).toLocaleDateString("pt-BR", {
			weekday: "long",
		});

		if (!dailyForeCast[date]) {
			dailyForeCast[date] = foreCast;
		}
	}
    const nextFiveDays = Object.values(dailyForeCast).slice(1, 6);
    console.log(nextFiveDays);
    
    function convertDate(date)
    {
        const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
            weekday: "long",
        });
        return newDate;
    }

	return (
		<div className="weatherContainer">
            <h3>Previsão dos Próximos 5 Dias</h3>
            <div className="weatherlist"> 
                {nextFiveDays.map((foreCast) => (
                    <div key={foreCast.dt} className="weatherItem">
                        <p>{convertDate(foreCast)}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${foreCast.weather[0].icon}.png`}
                            alt={foreCast.weather[0].description}
                        />
                        <p>{foreCast.weather[0].description}</p>
                        <p>
                            min {Math.round(foreCast.main.temp_min)}°C / max {Math.round(foreCast.main.temp_max)}°C
                        </p>
                    </div>
                ))}
            </div>
		</div>
	);
}

export default WeatherInformationFiveDays;
