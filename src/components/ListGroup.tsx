import { useState } from "react";
import Button from "./Button";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({
  items,
  heading,
  onSelectItem = () => {},
}: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="mb-3 text-center text-primary fw-bold fs-3 text-uppercase text-capitalize">
        {heading}
      </h1>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <Button color="danger" onClick={() => console.log("Button clicked")}>
        Click me
      </Button>
    </>
  );
};



export default ListGroup;
