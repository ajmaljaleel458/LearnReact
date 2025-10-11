import "./App.css";

function Description() {
  return (
    <>
      <h1 className="title">Learn React</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
    </>
  );
}

function LikeButton() {
  return <button>Like</button>;
}

type User = {
  name: string;
  imageUrl: string;
  imageSize: number;
};

const user: User = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <div className="App">
      <Description />
      <h2>Hey {user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h1>If you like react then do like it.</h1>
      <LikeButton />
    </div>
  );
}

export default App;
