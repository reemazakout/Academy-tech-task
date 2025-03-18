import { useState } from "react";
import Header from "../components/homepage/components/header";
import SearchInput from "../components/homepage/components/search-input";
import CardList from "../components/homepage/course/card-list";

export default function Home() {
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      {/* Hero section */}
      <header>
        <Header />
      </header>

      {/* Content section */}
      <div className=" flex items-center justify-center pt-32 pb-4 px-4 text-3xl font-extrabold text-center title-text">
        <h1 className="px-4">Join Teach Academy Courses Now.</h1>
      </div>

      {/* Search Input */}
      <div className="flex pl-6 w-full items-center justify-center mt-4 mb-4">
        <SearchInput onSearch={setSearchQuery} />
      </div>

      {/* Card section */}
      <CardList searchQuery={searchQuery} />
    </>
  );
}
