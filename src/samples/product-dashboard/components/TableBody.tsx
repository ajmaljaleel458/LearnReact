import TableRow from "./TableRow";

type ProductTableProps = {
  products: {
    name: string;
    category: string;
    price: string;
    stocked: boolean;
  }[];
};

export default function TableBody({ products }: ProductTableProps) {
  const rows = products?.map((product) => <TableRow product={product} />);
  return <tbody>{rows}</tbody>;
}
