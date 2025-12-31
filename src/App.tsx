import ListGroup from "./components/ListGroup";

const App = () => {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <ListGroup items={cities} heading="Cities" />
    </>
  );
};

export default App;
