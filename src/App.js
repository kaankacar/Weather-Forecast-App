import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css';
import Forecast from './Components/Forecast';
import Input from './Components/Input';
import TemperatureandDetails from './Components/TemperatureandDetails';
import Timeandlocation from './Components/Timeandlocation';
import Topbuttons from './Components/Topbuttons';
import getFormattedWeatherData from './Services/Weatherservice';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "london"});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Topbuttons />
      <Input />

      <Timeandlocation />
      <TemperatureandDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
