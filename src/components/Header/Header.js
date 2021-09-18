import React from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header-section">
      <div class="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search countries,region... "
        />
        <button type="submit" className="searchButton">
          <FaSistrix />
        </button>
      </div>
    </div>
  );
};

export default Header;
