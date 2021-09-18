import React from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
import { useEffect, useState } from "react";
const Header = ({ countries, setCountries }) => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((countries) => {
        setData(countries);
        
      })
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div className="header-section">
      <div class="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search countries,region... "
          onChange={(event) => {
            console.log("data: ",data)
            const matches = data.filter((country) =>
              country.name.includes(event.target.value)
            );
            console.log(matches);
            setCountries(matches)
          }}
        />
        <button type="submit" className="searchButton">
          <FaSistrix />
        </button>
      </div>
    </div>
  );
};

export default Header;
