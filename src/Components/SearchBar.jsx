import React from 'react';

import './styles/search-bar.css'

const SearchBar = (props) => {
  
  return (
    <section>
      <form onSubmit={event => event.preventDefault()}>
        <input
          className="search_bar fontAwesome"
          placeholder="&#xf002; Search Team Member"
          autoComplete="off"
          name="search-bar"
          type="text"
          value={props.term}
          onChange={event => props.onSearch(event.target.value)}
        />
      </form>
    </section>
  )
};

export default SearchBar;