type Props = {
  name: string;
  isPassed: boolean;
};

export default function Result({ name, isPassed }: Props) {
  return (
    <li>
      {name} has {isPassed ? "passed" : "failed"} the exam.
    </li>
  );
}
