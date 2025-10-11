import { PRODUCTS } from "../data/product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  console.log(PRODUCTS);

  return (
    <div className="block w-fit p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
}
