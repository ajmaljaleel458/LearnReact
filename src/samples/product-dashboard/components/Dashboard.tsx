import { useState } from "react";
import { PRODUCTS } from "../data/product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  const [filterText, setFilterText] = useState<string>("Hello World");
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);

  return (
    <div className="block w-fit p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={PRODUCTS}
      />
    </div>
  );
}
