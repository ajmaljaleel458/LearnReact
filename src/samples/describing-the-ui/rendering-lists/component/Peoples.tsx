import peoples from "../data/people";

type Props = {};

export default function Peoples({}: Props) {
  const names = peoples.map((person) => {
    const [name, profession] = person.split(": ");
    if (profession === "chemist") {
      return (
        <div key={name}>
          <b>{name}</b> ({profession})
        </div>
      );
    }
  });
  return <div>{names}</div>;
}
