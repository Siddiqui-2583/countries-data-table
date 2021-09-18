import React from 'react';
import { useEffect, useState } from "react";
import Pagination from '../Pagination/Pagination'
import './Table.css'
const Table = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((countries) => {
          setCountries(countries);
          console.log(countries);
        })
        .catch((e) => console.log(e.message));
    }, []);
    const flagStyle = {
      height: "50px",
    };
    return (
      <div>
        <table class="container">
          <thead>
            <tr>
              <th>
                <h1>Name</h1>
              </th>
              <th>
                <h1>Flag</h1>
              </th>
              <th>
                <h1>Population</h1>
              </th>
              <th>
                <h1>Religion</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr>
                <td>{country.name}</td>
                <td>
                  <img style={flagStyle} src={country.flag} alt="" />
                </td>
                <td>{country.population}</td>
                <td>{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination /><br /><br />
      </div>
    );
};

export default Table;