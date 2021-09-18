import React from 'react';

import Pagination from '../Pagination/Pagination'
import './Table.css'
const Table = ({ countries }) => {
  const columns=["Name","Flag","Population","Region"]
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div>
      <table class="container">
        <thead>
          <tr>
            {columns.map((column) => (
              <th>
                <h1>{column}</h1>
              </th>
            ))}
            
          </tr>
        </thead>
        <tbody>
          {countries.slice(currentPage - 1, currentPage + 4).map((country) => (
            <tr>
              <td>{country.name}</td>
              <td>
                <img className="flag" src={country.flag} alt="" />
              </td>
              <td>{country.population}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPages={countries.length}
      />
      <br />
    
    </div>
  );
};

export default Table;