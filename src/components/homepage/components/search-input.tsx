import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

// Interface for props
interface SearchInputProps {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // UseEffect to update search query when input changes
  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(searchQuery);
    }, 500); // Debounce delay

    return () => clearTimeout(debounce); // Cleanup on change
  }, [searchQuery, onSearch]);

  // Function to prevent the refresh when user clicks enter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        {/* Input field */}
        <input
          value={searchQuery}
          onClick={() => setSearchQuery("")}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search for a course"
          className="w-full border-2 pl-9 rounded-lg border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/*  Search Icon */}
        <CiSearch
          size={20}
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </form>
  );
}
