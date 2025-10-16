import Container from "./components/Container/Container";

export default function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Sandbox: state-preserving-and-resetting</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <Container />
    </div>
  );
}
