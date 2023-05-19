function Temp({ temp, humidity }) {
  return (
    <div className="weather-app">
      <div className="weather-info">
        <h3>
          it is currently {temp} degrees out there! there is {humidity}%
          humidity.
        </h3>
      </div>
    </div>
  );
}
export default Temp;
