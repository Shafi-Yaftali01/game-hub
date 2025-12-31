const ListGroup = () => {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const getMessage = () => {
    return cities.length === 0 ? <p>No cities found</p> : <p>Cities found</p>;
  };
  const getCities = () => {
    return cities.length > 0 ? (
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    ) : <p>No cities found</p>;
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


// this component is a list group that displays a list of cities
// it uses the cities array to display the list of cities
// it uses the getMessage function to display a message if the cities array is empty
// it uses the getCities function to display a list of cities if the cities array is not empty
// in react we use the return statement to return the JSX code
// we use the map function to iterate over the cities array and return a list of cities
// we use the key prop to uniquely identify each city
// we use the className prop to apply bootstrap classes to the list group
// we use the list-group class to apply bootstrap classes to the list group
// we use the list-group-item class to apply bootstrap classes to the list group items
