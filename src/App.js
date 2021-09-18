import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table'
import { useEffect, useState } from "react";
function App() {
  const title = "Countries";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
        setData(countries);
        // console.log(countries);
      })
      .catch((e) => console.log(e.message));
  }, []);
  const [countries, setCountries] = useState([]);
  return (
    <div className="App">
      <h1>{title}</h1>
      <Header data={data} setCountries={setCountries} />
      <Table countries={countries} />
    </div>
  );
}

export default App;
