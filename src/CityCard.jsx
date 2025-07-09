function CityCard({ city }) {
  if (!city) {
    return <div className="cityCard empty">Город не выбран</div>;
  }
  return (
    <div className="cityCard">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
