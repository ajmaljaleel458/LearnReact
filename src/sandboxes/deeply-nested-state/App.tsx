import TravelPlan, { TravelPlanBad } from "./components/TravelPlan/TravelPlan";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: deeply-nested-state</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <TravelPlanBad />
      <br />
      <TravelPlan />
    </div>
  );
}
