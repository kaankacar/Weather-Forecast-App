import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { useEffect, useState } from 'react';
import './App.css';
import Forecast from './Components/Forecast';
import Input from './Components/Input';
import TemperatureandDetails from './Components/TemperatureandDetails';
import Timeandlocation from './Components/Timeandlocation';
import Topbuttons from './Components/Topbuttons';
import getFormattedWeatherData from './Services/Weatherservice';

function App() {

  const [query, setQuery] = useState({ q: "berlin" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        setWeather(data)
      })
    };

    fetchWeather();
  }, [query, units])

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Topbuttons />
      <Input />

      {weather &&
        <div>
          <Timeandlocation weather={weather} />
          <TemperatureandDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily}/>
        </div>
      }
    </div>
  );
}

export default App;
