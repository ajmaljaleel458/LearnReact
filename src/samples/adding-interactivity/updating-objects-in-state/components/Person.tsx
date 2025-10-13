import { useState } from "react";

type Props = {};

type Person = {
  name: string;
  age: number;
  mobile: string;
};

function Person({}: Props) {
  const [person, setPerson] = useState<Person>({
    name: "John Doe",
    age: 30,
    mobile: "123-456-7890",
  });
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Mobile: {person.mobile}</p>
      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
        Birthday
      </button>
    </div>
  );
}

export default Person;
