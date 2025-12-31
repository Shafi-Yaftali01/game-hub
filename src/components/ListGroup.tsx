const ListGroup = () => {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1 className="mb-3">Cities</h1>
      <ul className="list-group">
        {cities.map(
          (
            city // cities.map is a method that returns a new array with the cities mapped to the new array
          ) => (
            <li className="list-group-item" key={city}>
              {city}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ListGroup;
