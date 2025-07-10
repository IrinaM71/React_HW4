function CitySelector({ cities, selectedCityName, onCityChange }) {
  return (
    <div className="citySelector">
      <label htmlFor="citySelect">Выберите город</label>
      <select
        id="citySelect"
        value={selectedCityName}
        onChange={(event) => onCityChange(event.target.value)}
      >
        <option value="">--Выберите город--</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
