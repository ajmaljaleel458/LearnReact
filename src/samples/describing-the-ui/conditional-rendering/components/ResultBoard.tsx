import Result from "./Result";

type ExamResult = { name: string; isPassed: boolean };

const results: ExamResult[] = [
  { name: "Math", isPassed: true },
  { name: "English", isPassed: false },
  { name: "Biology", isPassed: true },
  { name: "History", isPassed: true },
  { name: "Gym", isPassed: false },
];

export default function ResultBoard() {
  const resultsList = results.map((result) => (
    <Result key={result.name} name={result.name} isPassed={result.isPassed} />
  ));
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>{resultsList}</ul>
    </section>
  );
}
