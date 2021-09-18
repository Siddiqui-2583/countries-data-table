import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table'
import { useEffect, useState } from "react";
function App() {
  
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
        
        // console.log(countries);
      })
      .catch((e) => console.log(e.message));
  }, []);
  const [countries, setCountries] = useState([]);
  return (
    <div className="App">
      <h1>Countries</h1>
      <Header countries={countries} setCountries={setCountries} />
      <Table countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
