import { Button } from "@mui/material";
import { useState } from "react";

type Props = {};

export default function Form({}: Props) {
  console.log("Form rendered");

  const [message, setMessage] = useState<string>("Hello World");
  const [isSent, setIsSent] = useState<boolean>(false);

  function sendMessage(message: string) {
    alert(`Message sent: ${message}`);
    setIsSent(false);
    setMessage("");
  }

  function handleOnSent(e: any) {
    console.log("Form onSent called");
    e.preventDefault();
    setIsSent(true);
    sendMessage(message);
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
  }

  return (
    <>
      {isSent ? (
        <h1>Your message is on its way!</h1>
      ) : (
        <form onSubmit={handleOnSent}>
          <Counter />
          <textarea
            placeholder="Message..."
            value={message}
            onChange={handleOnChange}
            style={{ backgroundColor: "black", color: "white" }}
          />
          <Button type="submit" variant="contained">
            Sent
          </Button>
        </form>
      )}
    </>
  );
}

function Counter() {
  console.log("Counter rendered");

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <Button
        variant="contained"
        onClick={() => {
          setNumber(number + 1);
          console.log("value of number after 1 setState passed is:", number);
          setNumber(number + 1);
          console.log("value of number after 2 setState passed is:", number);
          setNumber(number + 1);
          console.log("value of number after 3 setState passed is:", number);
        }}
      >
        +3
      </Button>
    </>
  );
}
