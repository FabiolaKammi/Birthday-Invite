import React from 'react';
import EventInput from './Components/EventInput';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Event Invite</h1>
      <div className='introduction'>A birthday is not just a day to celebrate a year gone by,
         but to embrace the potential of the upcoming year. <br />
        It’s a day when you’re surrounded by friends and family who celebrate the fact that the world is a better place because you’re in it.</div>
      <p>Want to send some invite, we got you covered</p>
    <EventInput />
    <Footer />
    </div>
  );
}

export default App;
