import React from "react";
import "./Header.css";
// import { FaSistrix } from "react-icons/fa";
const Header = ({  data,setCountries }) => {
  
  return (
    <div className="header-section">
      
      <div class="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search countries,region... "
          onChange={(event) => {
            console.log("data: ", data);
            const matches = data.filter(
              (country) =>
                country.name
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase()) ||
                country.region
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
            );
            console.log("matches: ", matches);
            setCountries(matches);
          }}
        />
        {/* <button type="submit" className="searchButton">
          <FaSistrix />
        </button> */}
      </div>
    </div>
  );
};

export default Header;
