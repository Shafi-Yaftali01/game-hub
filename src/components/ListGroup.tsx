const ListGroup = () => {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const getMessage = () => {
    return cities.length === 0 ? <p>No cities found</p> : <p>Cities found</p>;
  };
  // this is a function that handles the click event
  // it takes a city as an argument
  // it logs the city to the console
  const handleClick = (city: string) => {
    console.log(city);
  };
  const getCities = () => {
    return cities.length > 0 ? (
      <ul className="list-group">
        {cities.map((city) => (
          <li
            className="list-group-item"
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
