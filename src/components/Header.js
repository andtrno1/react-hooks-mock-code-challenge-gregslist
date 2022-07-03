import React from "react";
import Search from "./Search";

function Header({ onSearchType, searchRes }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchType={onSearchType} searchRes={searchRes} />
    </header>
  );
}

export default Header;
