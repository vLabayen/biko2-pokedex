import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./searchBar.css";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input className="searchInput" type="text" />
    </div>
  );
};
