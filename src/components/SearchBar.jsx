import { useState, useRef } from "react";
import { useUser } from "../context/UserContext";
import { BsSearch } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

function SearchBar() {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const { data, setFilteredData } = useUser();
  const { darkMode } = useTheme();
  const searchBar = useRef();

  const handleToggleSearchBar = () => {
    setSearchBarIsOpen(prev => !prev);

    if (searchBarIsOpen) {
      setFilteredData(data);
    }

    if (!searchBarIsOpen) {
      setTimeout(() => {
        searchBar.current.focus();
      });
    }
  };

  const handleFilter = value => {
    return data.filter(
      channel =>
        channel.user_login.includes(value.toString().toLowerCase()) ||
        channel.game_name.toLowerCase().includes(value.toString().toLowerCase())
    );
  };

  return (
    <div className="flex items-center justify-center gap-x-2 overflow-hidden">
      {searchBarIsOpen && (
        <input
          ref={searchBar}
          type="text"
          className={`px-1 text-sm h-8 w-32 rounded-md transition-all border-2 border-transparent focus:border-2 focus-within:outline-none focus:outline-none focus:border-purple-400 ${
            darkMode
              ? "bg-gray-600 placeholder:text-gray-200 caret-white text-tw-white || hover:border-2 hover:border-gray-500 || focus:bg-black focus:placeholder:text-gray-300"
              : "bg-gray-50 text-tw-black hover:border-2 hover:border-gray-400 placeholder:text-gray-600 || focus:bg-white"
          }`}
          placeholder="Ara"
          onChange={({ target }) =>
            setFilteredData(() => handleFilter(target.value))
          }
        />
      )}
      <button
        className="flex items-center justify-center bg-purple-400 p-2 rounded-full hover:bg-purple-200 transition-colors"
        onClick={handleToggleSearchBar}
      >
        <BsSearch size={16} className="text-purple-800" />
      </button>
    </div>
  );
}

export default SearchBar;