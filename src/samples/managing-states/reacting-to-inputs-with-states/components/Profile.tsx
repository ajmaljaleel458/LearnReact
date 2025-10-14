import { useState } from "react";

type Props = {};

export default function Profile({}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Ajmal");
  const [lastName, setLastName] = useState("Jaleel");

  function handleClick(e: any) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  return (
    <form>
      <h3>Ajmal</h3>
      <label>
        First Name <span>({firstName})</span>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!isEditing}
        />
      </label>
      <h3>Jaleel</h3>
      <label>
        Last Name <span>({lastName})</span>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={!isEditing}
        />
      </label>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </form>
  );
}
