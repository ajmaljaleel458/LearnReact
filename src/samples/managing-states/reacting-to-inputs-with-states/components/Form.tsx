type Props = {
  state: "empty" | "filling" | "submitting" | "submitted" | "error";
};

export default function Form({ state = "empty" }: Props) {
  if (state === "submitted") {
    return <h2>Thank you for your answer!</h2>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === "empty" || status === "submitting"} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
