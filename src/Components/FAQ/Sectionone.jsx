import { BiSearch } from "react-icons/bi"; 
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import bgImage from "../../assets/media/image.png";
import SectionTwo from "./SectionTwo";

function FaqSectionOne() {
  // State and handler should be in the main component
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-[300px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-center py-10">
          <h1 className="text-green-700 font-semibold text-3xl">FAQ</h1>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center mt-4"
          >
            <div className="relative w-64 mt-8 text-center justify-center">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <BiSearch  className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </form>
        </div>
      </div>
      <SectionTwo />
    </>
  );
}

export default FaqSectionOne;
