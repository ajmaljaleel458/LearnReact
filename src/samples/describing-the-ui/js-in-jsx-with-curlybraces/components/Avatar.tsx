import type { Person } from "../types";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Avatar({ person }: { person: Person }) {
  return (
    <div>
      <h1>This is {person.name}</h1>
      <img className="avatar" src={person.img_url} alt={person.img_alt} />
      <p>Today is {formatDate(new Date())}.</p>
    </div>
  );
}
