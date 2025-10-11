import "./App.css";

function Description() {
  return (
    <>
      <h1>Learn React</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
    </>
  );
}

function LikeButton() {
  return <button>Like</button>;
}

function App() {
  return (
    <div className="App">
      <Description />
      <h1>If you like react then do like it.</h1>
      <LikeButton />
    </div>
  );
}

export default App;
