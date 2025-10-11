import CheckBox from "./CheckBox";
import SearchField from "./SearchField";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2">
      <SearchField />
      <CheckBox />
      <h1 className="text-gray-400">AvailableOnly</h1>
    </div>
  );
}
