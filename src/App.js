
import './App.css';
import { useState,useEffect } from 'react';
import Time from './time/Time';


function App() {
  const [count, setcount] = useState(0)
  let c =0;


  return (
    <div className="App">
 
   <Time/>
    </div>
  );
}

export default App;
