import TaskApp from "./components/TaskApp/TaskApp";

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
      <h1>Sandbox: state-reducer</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <TaskApp />
    </div>
  );
}
