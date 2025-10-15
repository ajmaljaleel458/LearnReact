import Form, { FormBad } from "./components/Form/Form";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: redundant-state</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <FormBad />
      <Form />
    </div>
  );
}
