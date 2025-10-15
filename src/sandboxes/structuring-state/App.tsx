import FollowCursor, {
  FollowCursorBad,
} from "./components/FollowCursor/FollowCursor";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: structuring-state</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <FollowCursorBad />
      <FollowCursor />
    </div>
  );
}
