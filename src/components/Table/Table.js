import React from 'react';

import Pagination from '../Pagination/Pagination'
import './Table.css'
const Table = ({ countries, setCountries }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

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
          {countries.slice(currentPage - 1, currentPage + 4).map((country) => (
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPages={countries.length}
      />
      <br />
      <br />
    </div>
  );
};

export default Table;