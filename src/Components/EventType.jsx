import React from 'react'
import { useState } from 'react';
import EventInput from './EventInput';

const EventType = () => {
const [partyClick, setPartyClick]=useState(false);
const [formalClick, setFormalClick]=useState(false);
const [sadClick, setSadClick]=useState(false);
const choiceConfirm = " Great! You made a choice";

const handlePartyClick = ()=>{setPartyClick(true); setFormalClick(false); setSadClick(false); alert(choiceConfirm );}
const handleFormalClick = () => {setFormalClick(true) ; setPartyClick(false);setSadClick(false); alert(choiceConfirm);}
const handleSadClick = () => {setSadClick(true); setFormalClick(false); setPartyClick(false);alert(choiceConfirm);}



  return (
    <>
    <div className="type-container">
        <h1>Event Invite</h1>
        <p>Want to send some invite, we got you covered</p>
        <h3>Choose your event type</h3>
      <ul className='first-line' >
        <li>
            <div onClick={handlePartyClick}>Birthday</div>
        </li>
        <li>
            <div onClick={handlePartyClick}>Wedding</div>
        </li>
        <li>
            <div onClick={handlePartyClick}>Graduation</div>
        </li>
        <li>
            <div onClick={handlePartyClick}>Baby-shower</div>
        </li>
        </ul>

        <ul className='second-line'>
        <li>
            <div onClick={handleFormalClick}>Webinar</div>
        </li>
        <li>
            <div onClick={handleFormalClick}>Job Fair</div>  
        </li>
        <li>
            <div onClick={handleFormalClick}>Conference</div>
        </li>
        <li>
            <div onClick={handleFormalClick}>Seminar</div>
        </li>
      </ul>

      <ul>
        <li className='third-line'>
            <div onClick={handleSadClick}>Webinar</div>
        </li>
        <li>
            <div onClick={handleSadClick}>Job Fair</div>  
        </li>
        <li>
            <div onClick={handleSadClick}>Conference</div>
        </li>
        <li>
            <div onClick={handleSadClick}>Funeral</div>
        </li>
      </ul>
      </div>
      <div className='input-wrapper'>
      {(partyClick === true || sadClick===true|| formalClick===true) && (<EventInput />)}
    </div>
    </>
  )
}

export default EventType;
