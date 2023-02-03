import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";

//import Search from "./components/Search/Search";
//import Pagination from "./components/Pagination/Pagination";
//import Navbar from "./components/Navbar/Navbar";

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchData] = useState([])
  let {info, results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-12 align-self-center">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
