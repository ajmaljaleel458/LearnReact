export default function TodoList({ todos }: { todos: string[] }) {
  const todosli = todos.map((todo) => <li key={todo}>{todo}</li>);
  return <ul>{todosli}</ul>;
}
