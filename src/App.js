import React from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Components/Search'

function App() {
  return <div>
    <div class="sidenav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <a href="#team-members">Team Members</a>
      <Search />
    </div>
    <div class="main">
      <h2>TeamRic</h2>
      <p>This sidebar is of full height (100%) and always shown.</p>
    </div>
</div>
}

export default App;
