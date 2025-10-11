import TableBody from "./TableBody";
import TableHead from "./TableHead";

type ProductTableProps = {
  products: {
    name: string;
    category: string;
    price: string;
    stocked: boolean;
  }[];
};

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="relative overflow-x-auto pt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead attributes={Object.keys(products[0])} />
        <TableBody products={products} />
      </table>
    </div>
  );
}
