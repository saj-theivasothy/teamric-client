import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import Results from "./Results";

import data from "../data/sample.json";

import "./styles/search.css";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(data.employees);
  const [searchResults, setSearchResults] = useState(data.employees);

  useEffect(() => {
    const liveResults = results.filter(
      (result) => result.name.toLowerCase().includes(term) && result
    );
    setSearchResults(liveResults);
  }, [term, results]);

  return (
    <main className="container">
      <SearchBar onSearch={(term) => setTerm(term)} term={term} />
      <div className="results_container">
        <Results results={searchResults} onClick={getEmployeePage} />
      </div>
    </main>
  );
};

export default Search;
