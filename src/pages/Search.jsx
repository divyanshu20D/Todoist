import React from "react";
import { IoMdSearch } from "react-icons/io";

function Search({ setShowSearch }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-[99999] rounded flex flex-col items-center">
      <div className="w-[50%] mt-[100px]  border-1 rounded-lg flex">
        <IoMdSearch size={40} />
        <input
          className="w-[95%] rounded-lg p-2 bg-slate-200 text-black"
          type="text"
          placeholder="Search..."
        />
        <button
          className="w-[5%] h-full rounded-lg bg-black text-white "
          onClick={() => {
            setShowSearch((prev) => !prev);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Search;
