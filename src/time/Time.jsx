import React, { useState } from 'react';
import './time.css'
function Time() {
  // State to manage date and time separately
  const [time1, settime1] = useState(null);

  const [time2, settime2] = useState(null);
  const [diff,setDiff] = useState(null)

  // Event handlers to update state when date or time changes
  
  const difference = ()=>{
  
    let timediff = new Date(time1) -new Date(time2);
    setDiff(timediff/1000)
  }


  // Event handler to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Combine date and time to form the desired timestamp format
 console.log(time1,time2);

    difference()
    // Do something with the timestamp value (e.g., submit to a server)
  
  };
  const handletime1Change = (event)=>{
  event.preventDefault();
  settime1(event.target.value)
  }
  const handletime2Change = (event)=>{
    event.preventDefault();
    settime2(event.target.value)

  }

  return (
   <div className='main'>
     <form onSubmit={handleSubmit}>
     <div  className='inp1'>
     <label>
        Select time 1:  
        {/* Input for date */}
          <input
          type="datetime-local"
          value={time1}
          onChange={handletime1Change}
          step="1"
        />
      </label>
     </div>
     <br/>
     <div  className='inp2'>
     <label>
        Select time 2:
        {/* Input for date */}
        <input
          type="datetime-local"
          value={time2}
          onChange={handletime2Change}
          step="1"
        />
      </label>
     </div>
   
      
    <br/>
      <button className='sub' type="submit">Submit</button>
    </form>

  <div  className='diff'>
  <label >
      Difference is {diff>0?diff:-diff} seconds
    </label>
    </div> 
  
   </div>

    
  );
}

export default Time;
