import { useState } from "react";
import "./AddTask.css";

type Prop = {
  onAddTask: (text: string) => void;
};

export default function AddTask({ onAddTask }: Prop) {
  const [text, setText] = useState<string>("");

  function handleAddTask() {
    onAddTask(text);
    setText("");
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
