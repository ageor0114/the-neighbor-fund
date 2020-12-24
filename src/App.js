import React, { useState } from 'react';
import './App.scss';
import searchIcon from './assets/search-icon.svg';
import { demoContacts } from './assets/content';

import DemoContactCard from './components/DemoContactCard';
import DemoPage from './components/DemoPage';

function App() {

  
  const [query, setQuery] = useState("");

  function handleInputChange(event){
    setQuery(event.target.value);
  }
  function handleKeyDown(e){
    if (e.key === 'Enter') {
      console.log("Query Entered");
      //submitCity();
    }
  }

  return (
    <div className="App">
      <button className="login-button">Log In</button>
      <header>
        <h1>The Neighbor Fund</h1>
      </header>

      <p>I'm looking to raise funds for my ...</p>

      <div className="input-outer">
        <input className="input-field"
               placeholder="soccer team, school, hackathon ..."
               type="text"
               value={query}
               onChange={handleInputChange}
               onKeyDown={handleKeyDown}
        />
        <button className="input-button"><img className="search-icon" alt="search" src={searchIcon}/></button>
      </div>
      
      <div className="landing-flex">
        <div className="landing-contact-wrapper">
          <div className="callout-card">
            <p>Discover organizations in your neighborhood that might be willing to support the cause.</p>
          </div>


          {demoContacts.map((contact,index) => (
            <DemoContactCard title={contact.title} text={contact.text} key={index}/>
          ))}
        </div>

        <div className="landing-page-wrapper">
          <div className="callout-card">
            <p>Build your donate page & share!</p>
          </div>

          <DemoPage/>
        </div>
      </div>
    </div>
  );
}

export default App;
