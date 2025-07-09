import "./App.css";
import CitiesData from "./data/CitiesData.jsx";
import CitySelector from "./CitySelector";
import CityCard from "./CityCard";
import { useState } from "react";

function App() {
  const [selectedCityName, setSelectedCityName] = useState("");
  const selectedCity = CitiesData.find(
    (city) => city.name === selectedCityName
  );
  return (
    <div className="container">
      <CitySelector
        cities={CitiesData}
        selectedCityName={selectedCityName}
        onCityChange={setSelectedCityName}
      />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
