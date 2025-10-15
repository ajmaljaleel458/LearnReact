import FeedbackForm, {
  FeedbackFormBad,
} from "./components/FeedbackForm/FeedbackForm";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sandbox: state-contradictions</h1>
      <p>Welcome to your isolated React sandbox.</p>
      <FeedbackFormBad />
      <FeedbackForm />
    </div>
  );
}
