import type { Products } from "../commen/types";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Products;
  filterText: string;
  inStockOnly: boolean;
}) {
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatch = inStockOnly ? product.stocked : true;
    return nameMatch && stockMatch;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 pt-4">
        No matching products found.
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto pt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead attributes={Object.keys(filteredProducts[0])} />
        <TableBody products={filteredProducts} /> {/* ✅ FIXED */}
      </table>
    </div>
  );
}
