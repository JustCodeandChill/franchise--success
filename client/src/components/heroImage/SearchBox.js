import React from "react";
import SearchSection from "./SearchSection";
const SearchBox = () => {
  return (
    <div id="findFranchiseSection">
      <p className="searchText center">Tìm Franchise của bạn</p>
      {/* Grid system of the search bar */}
      <SearchSection />
    </div>
  );
};

export default SearchBox;
