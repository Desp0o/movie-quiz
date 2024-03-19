import { useState } from "react";
import { searchSVG } from "../../assets/SVGS";

const SearchComp = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search_parent">
        <span className="search_icon">{searchSVG}</span>
      <input
        type="text"
        className="search_input"
        value={searchValue}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchComp;
