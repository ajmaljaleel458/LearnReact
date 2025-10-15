import { useState } from "react";
import "./FeedbackForm.css";

export function FeedbackFormBad() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <div className="FeedbackForm">
      Hello from FeedbackForm!
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button disabled={isSending} type="submit">
          Send
        </button>
        {isSending && <p>Sending...</p>}
      </form>
    </div>
  );
}

type Status = "typing" | "sending" | "sent";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const [status, setStatus] = useState<Status>("typing");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  const isSending = status == "sending";

  if (status == "sent") {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <div className="FeedbackForm">
      Hello from FeedbackForm!
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button disabled={isSending} type="submit">
          Send
        </button>
        {isSending && <p>Sending...</p>}
      </form>
    </div>
  );
}

function sendMessage(text: string) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
    console.log(text);
  });
}
