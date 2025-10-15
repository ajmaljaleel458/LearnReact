import { useState } from "react";
import "./FollowCursor.css";

export function FollowCursorBad() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  function handleOnMouseMove(e: any) {
    setPosX(e.clientX);
    setPosY(e.clientY);
  }
  return (
    <div className="FollowCursor">
      Component: FollowCursorBad
      <div className="FollowSurface" onMouseMove={handleOnMouseMove}>
        <div
          className="Follower"
          style={{ transform: `translate(${posX}px, ${posY}px)` }}
        ></div>
      </div>
    </div>
  );
}

export default function FollowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleOnMouseMove(e: any) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className="FollowCursor">
      Component: FollowCursor
      <div className="FollowSurface" onMouseMove={handleOnMouseMove}>
        <div
          className="Follower"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
      </div>
    </div>
  );
}
