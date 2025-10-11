import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function Description() {
  return (
    <>
      <h1 className="title">Learn React</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
    </>
  );
}

function Greeting({ name, visibility }: { name: string; visibility: boolean }) {
  return (
    <h1 style={{ visibility: visibility ? "visible" : "hidden" }}>
      Thank you {name} for liking react
    </h1>
  );
}

function LikeButton({ onLiked }: { onLiked: () => void }) {
  return <button onClick={onLiked}>Like</button>;
}

type User = {
  id: number;
  name: string;
  avatar?: string;
};

const user = {
  id: 0,
  name: "John Doe",
  avatar: "https://i.pravatar.cc/40?u=JohnDoe",
};

const users: User[] = [
  { id: 1, name: "Alice Johnson", avatar: "https://i.pravatar.cc/40?u=alice" },
  { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?u=bob" },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "https://i.pravatar.cc/40?u=charlie",
  },
];

function LikedUsers({ users }: { users: User[] }) {
  const likedUsers = users.map((user) => (
    <li key={user.id}>
      {user.name} <img src={user.avatar} alt="user image" />
    </li>
  ));
  return <ul>{likedUsers}</ul>;
}

function App() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
  };

  return (
    <div className="App">
      <Description />
      <h2>Hey {user.name}</h2>
      <img
        className="avatar"
        src={user.avatar}
        alt={"Photo of " + user.name}
        style={{
          width: user.avatar,
          height: user.avatar,
        }}
      />
      <h1>If you like react then do like it.</h1>
      <LikeButton onLiked={handleLike} />
      <Greeting visibility={isLiked} name={user.name} />
      <h2>Other users liked</h2>
      <LikedUsers users={users} />

      <div>
        <h2>React Tic Tac Toe</h2>
        <div className="game-board">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
