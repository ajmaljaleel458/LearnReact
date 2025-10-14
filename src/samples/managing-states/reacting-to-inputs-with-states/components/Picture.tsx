import { useState } from "react";

export default function Challenge() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex justify-center items-center w-100 h-100 bg-amber-300"
      onClick={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      <div
        className={
          hovered ? "w-75 h-75 bg-amber-950" : "w-50 h-50 bg-amber-950"
        }
        onClick={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
      ></div>
    </div>
  );
}
