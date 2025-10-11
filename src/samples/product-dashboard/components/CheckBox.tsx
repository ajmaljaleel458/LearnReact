function CheckBox({
  inStockOnly,
  onInStockOnlyChange,
}: {
  inStockOnly: boolean;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}) {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      onChange={(e) => onInStockOnlyChange(e.target.checked)}
      checked={inStockOnly}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
  );
}

export default CheckBox;
