import Hello from "./components/Hello/Hello";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: sample</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <Hello />
      <Profile />
    </div>
  );
}
