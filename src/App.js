import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Search from './Components/Search';
import FeedbackSummary from './Components/FeedbackSummary';
import FeedbackContent from './Components/FeedbackContent';

function App() {
  return <div>
    <Sidebar>
      <Search/>
    </Sidebar>
    <div class="main">
      <FeedbackSummary/>
      <FeedbackContent/>
    </div>
</div>
}

export default App;
