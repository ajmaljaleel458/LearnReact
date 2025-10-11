import Data from "./Data";

type Product = {
  name: string;
  category: string;
  price: string;
  stocked: boolean;
};

export default function TableRow({ product }: { product: Product }) {
  const datas = Object.values(product).map((value, index) => (
    <Data data={String(value)} key={index} />
  ));
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      {datas}
    </tr>
  );
}
