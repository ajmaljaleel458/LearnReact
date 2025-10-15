import { useState } from "react";
import "./Form.css";

export function FormBad() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e: any) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e: any) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }
  return (
    <div className="Form">
      Hello from Form!
      <h2>Let's check you in</h2>
      <label>
        First name:{" "}
        <input
          className="Input"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          className="Input"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: any) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: any) {
    setLastName(e.target.value);
  }
  return (
    <div className="Form">
      Hello from Form!
      <h2>Let's check you in</h2>
      <label>
        First name:{" "}
        <input
          className="Input"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          className="Input"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{firstName + " " + lastName}</b>
      </p>
    </div>
  );
}
