import { useState } from "react";

const ListGroup = () => {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedCity, setSelectedCity] = useState<string | null>(null); 
  const getMessage = () => {
    return cities.length === 0 ? <p>No cities found</p> : <p>Cities found</p>;
  };

  const handleClick = (city: string) => {
    setSelectedCity(city);
  };
  const getCities = () => {
    return cities.length > 0 ? (
      <ul className="list-group">
        {cities.map((city) => (
          <li
            className={selectedCity === city ? "list-group-item active" : "list-group-item"}
            key={city}
            onClick={() => handleClick(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    ) : (
      <p>No cities found</p>
    );
  };
  return (
    <>
      <h1 className="mb-3">Cities</h1>
      {getMessage()}
      {getCities()}
    </>
  );
};

export default ListGroup;
