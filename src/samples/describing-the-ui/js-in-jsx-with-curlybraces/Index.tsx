import Avatar from "./components/Avatar";
import TodoList from "./components/TodoList";
import type { Person } from "./types";

type Props = {};

const person: Person = {
  name: "Gregorio Y. Zara",
  img_url: "https://i.imgur.com/7vQD0fPs.jpg",
  img_alt: "Gregorio Y. Zara",
  todos: [
    "Improve the videophone",
    "Prepare aeronautics lectures",
    "Work on the alcohol-fuelled engine",
  ],
};

export default function Index({}: Props) {
  return (
    <div>
      <Avatar
        name={person.name}
        img_url={person.img_url}
        img_alt={person.img_alt}
      />
      <TodoList todos={person.todos} />
    </div>
  );
}
