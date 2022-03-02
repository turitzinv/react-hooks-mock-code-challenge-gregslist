import React from "react";
import Search from "./Search";

function Header({handleSearchFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchFilter={handleSearchFilter} />
    </header>
  );
}

export default Header;
