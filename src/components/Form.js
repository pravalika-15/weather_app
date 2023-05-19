import { useState } from "react";

function Form({ onSubmit }) {
  const [location, setLocation] = useState("");
  const onFormSumit = (e) => {
    e.preventDefault();
    // setLocation(e.target.value);
    onSubmit(location);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <p>use this site to get weather!</p>
      <form onSubmit={onFormSumit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

export default Form;
