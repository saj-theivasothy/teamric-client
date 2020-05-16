import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";

import "./styles/search.css";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("/employees").then((res) => {
      setResults(res.data);
      setSearchResults(res.data);
    });
  }, []);

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
