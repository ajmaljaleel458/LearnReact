import SnackMenu, { SnackMenuBad } from "./components/SnackMenu/SnackMenu";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: state-duplication</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <SnackMenuBad />
      <SnackMenu />
    </div>
  );
}
