import React, { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "pineapple",
];

const SearchFilterComponent = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query)
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md">
        {/* Search Input */}
        <h1 className="font-bold text-2xl  flex items-center justify-center mb-10">React Search Functionality</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search fruits..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md outline-none "
        />

        {/* Filtered List */}
        <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden flex items-center ">
          {filteredItems.length ? (
            <ul className="divide-y divide-gray-200">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 hover:bg-indigo-100 transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-gray-500 text-center">No matching items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterComponent;
