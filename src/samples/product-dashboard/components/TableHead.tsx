import Attribute from "./Attribute";

export default function TableHead({ attributes }: { attributes?: string[] }) {
  const attrs = attributes?.map((attr) => (
    <Attribute value={attr} key={attr} />
  ));
  console.log(attrs);
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>{attrs}</tr>
    </thead>
  );
}
