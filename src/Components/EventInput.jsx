import React from 'react';
import { useState } from 'react';

const EventInput = () => {
   const  [name, setName]= useState("")
   const [location, setLocation]= ("")
   const  [event, setEvent] = useState("")
    const [invited, setInvited] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [code, setCode] = useState("")
    const [sign, setSign] = useState("")
    const [isSubmit, setSubmit]= useState(false)

const handleEventChange= (e)=>{e.preventDefault();setEvent(e.target.value); console.log(event)};
const handleInvitedChange= (e)=>{e.preventDefault();setInvited(e.target.value); console.log(event)};
const handleDateChange= (e)=>{e.preventDefault();setDate(e.target.value); console.log(event)};
const handleTimeChange= (e)=>{e.preventDefault();setTime(e.target.value); console.log(event)};
const handleCodeChange= (e)=>{e.preventDefault();setCode(e.target.value); console.log(event)};
const handleNameChange= (e)=>{e.preventDefault();setName(e.target.value); console.log(event)};
const handleLocationChange= (e)=>{e.preventDefault();setLocation(e.target.value); };

const handleSignChange= (e)=>{setSign(e.target.value); console.log(event)};




const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmit(true)
   
}


  return (
    <>
    <div className='input-container'>
        <h4>Please Enter the following information</h4>
      <form className='input-form' onSubmit={handleSubmit}>
        <div>
        <input  onChange={handleEventChange} type='text' placeholder='EVENT'  name='event'/>
        <input  onChange={handleNameChange} type='text' placeholder='BIRTHDAY OWNER'  name='name'/>
        <input onChange={handleInvitedChange} type='text' placeholder='INVITED'  name='Invited'/>
        <input onChange={handleDateChange} type='text' placeholder='DATE'  name='date'/>
        </div>
        <div>
        <input onChange={handleLocationChange} type='text' placeholder='LOCATION'  name='location'/>
        <input onChange={handleTimeChange} type='text' placeholder='TIME'  name='time'/>
        <input onChange={handleCodeChange} type='text' placeholder='DRESS CODE'  name='code'/>
        <input onChange={handleSignChange} type='text' placeholder='SIGNATURE'  name='sign' />
        </div>
        <button  onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
    <div className='invite-wrapper'>
        {isSubmit ? (
            <div className='invite-container'>
            <h3>{event}</h3>
            <p>
Dear {invited}, <br /> It is with great pleasure that we invite you to join us for {event}. 
This special day is an opportunity to honor the journey, the memories,
 and the joy that the person in honor has brought into our lives.<br /><br />

Date: {date} {" "}{" "}
Time: {time} {" "}{" "}
Location:{location} {" "}{" "}
Dress Code: {code} {" "} {" "} <br />
The evening will be filled with laughter, music, and stories that weave the tapestry of {name}life. We will dine, 
dance, and raise a toast to the years that have been and the many more to come.
<br /> <br /> <br />
Please RSVP by November 25th to ensure we have a place reserved just for you.<br />
We eagerly await your company on this joyous occasion.<br />
Warmest regards,<br />
            </p>
            <span>{sign}</span>
          </div>
        ) :null}
    </div>
    </>
  )
}

export default EventInput;
