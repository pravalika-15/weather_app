import { useState } from "react";
import Form from "./components/Form";
import Temp from "./components/Temp";
import axios from "axios";

function App() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (location) => {
    console.log(location);
    // e.preventDefault();
    fetchWeather(location);
  };

  const fetchWeather = async (location) => {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=f924979c8a4e683fbaa89a78a5f6b0a6&query=${location}`
    );
    console.log(location);
    console.log(response.data);
    console.log(response.data.current);
    console.log(response.data.current.temperature);
    console.log(response.data.current.humidity);
    setTemperature(response.data.current.temperature);
    setHumidity(response.data.current.humidity);
    // setTemperature(33);
    // setHumidity(45);
    setShow(true);
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      {show && <Temp temp={temperature} humidity={humidity} />}
    </div>
  );
}

export default App;
