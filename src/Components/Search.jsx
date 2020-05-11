import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import Results from "./Results";

import data from "../data/sample.json";

import "./styles/search.css";

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
        <Results results={searchResults} onClick={props.onClick} />
      </div>
    </main>
  );
};

export default Search;
