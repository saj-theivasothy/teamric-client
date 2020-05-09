import React from 'react';
import Search from './Search'

function Sidebar() {
return <div class="sidenav">
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#clients">Clients</a>
<a href="#contact">Contact</a>
<Search/>
</div>
}

export default Sidebar;