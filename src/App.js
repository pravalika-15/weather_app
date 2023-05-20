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
    try {
      const response = await axios.get("https://example.com/api");
      // Process the response
      console.log(location);
      console.log(response.data);
      console.log(response.data.current);
      console.log(response.data.current.temperature);
      console.log(response.data.current.humidity);
      setTemperature(response.data.current.temperature);
      setHumidity(response.data.current.humidity);
    } catch (error) {
      console.error("An error occurred:", error);
    }

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
