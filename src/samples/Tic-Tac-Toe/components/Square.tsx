import type { Value } from "../../../commen/types";

export default function Square({
  value,
  onSquareClick,
}: {
  value: Value;
  onSquareClick?: () => void;
}) {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}
