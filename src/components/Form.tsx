// lets create a form component that will be used to display a form with a button to submit the form

import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleSubmit = (person: {
    name: string;
    email: string;
    age: string;
  }) => {
    console.log(person);
  };
  return (
    <form className="form-control w-100 border-0 shadow-sm p-3 bg-light rounded-3 text-start">
      <input
        className="form-control mb-3 rounded-3 border-0 shadow-sm p-3 bg-light text-start text-dark form-control-lg form-control-lg-lg form-control-lg-md form-control-lg-sm form-control-lg-xs"
        type="text"
        placeholder="Name"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />

      <input
        className="form-control mb-3 rounded-3 border-0 shadow-sm p-3 bg-light text-start text-dark form-control-lg form-control-lg-lg form-control-lg-md form-control-lg-sm form-control-lg-xs"
        type="email"
        placeholder="Email"
        value={person.email}
        onChange={(e) => setPerson({ ...person, email: e.target.value })}
      />
      <input
        className="form-control mb-3 rounded-3 border-0 shadow-sm p-3 bg-light text-start text-dark form-control-lg form-control-lg-lg form-control-lg-md form-control-lg-sm form-control-lg-xs"
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <button className="btn btn-primary" onClick={() => handleSubmit(person)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
