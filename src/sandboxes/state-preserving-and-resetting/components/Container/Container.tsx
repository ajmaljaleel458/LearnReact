import { useState } from "react";
import Counter from "../Counter/Counter";
import "./Container.css";

export default function Container() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className="Container">
      Hello from Container!
      <Counter />
      {active && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => {
            setActive(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}
