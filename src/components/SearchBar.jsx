import React, { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      onSearch(query);
      inputRef.current.value = ""; // clear input after search
    }
  };

  // Focus input automatically when component mounts
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-3 mb-8"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for recipes (e.g., pasta)"
        className="w-64 sm:w-80 md:w-96 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition-transform transform hover:scale-105"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
