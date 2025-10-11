import CheckBox from "./CheckBox";
import SearchField from "./SearchField";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <SearchField
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <CheckBox
        inStockOnly={inStockOnly}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <h1 className="text-gray-400">AvailableOnly</h1>
    </div>
  );
}
