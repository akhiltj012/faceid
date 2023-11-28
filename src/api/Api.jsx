import React, { useState } from 'react'
import '../api/api.css';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import axios from 'axios';

export const Api = () => {
  let id = '';
  let Url = '';
  const [voice,setVoice] = useState('')
const change = (e)=>{
setVoice(e.target.value)
console.log(voice);
}
const create =()=>{
    
let data = JSON.stringify({
  "script": {
    "type": "text",
    "subtitles": "false",
    "provider": {
      "type": "microsoft",
      "voice_id": "en-US-JennyNeural"
    },
    "ssml": "false",
    "input": voice
  },
  "config": {
    "fluent": "false",
    "pad_audio": "0.0"
  },
  "source_url": "https://create-images-results.d-id.com/api_docs/assets/noelle.jpeg",
  "driver_url": "bank://lively",
  "name": "demo1"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.d-id.com/talks',
  headers: { 
    'accept': 'application/json', 
    'authorization': 'Basic Z2V0YWtoaWwwMTJAZ21haWwuY29t:nmd92eIULBEP5U-k2NDRl', 
    'content-type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  id = JSON.stringify(response.data.id)




let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.d-id.com/talks/tlk_4oNCqS5JPVdZejtnc7uT9',
  headers: { 
    'accept': 'application/json', 
    'authorization': 'Basic Z2V0YWtoaWwwMTJAZ21haWwuY29t:nmd92eIULBEP5U-k2NDRl'
  }
};

axios.request(config)
.then((response) => {
  Url = JSON.stringify(response.data).object.audio_url;
  console.log(Url);
})
.catch((error) => {
  console.log(error);
});


})
.catch((error) => {
  console.log(error);
});

}

  return (
    <div> 

    <div className='main'>
     <div className='input_div'> 
    <div> <input onChange={change}  type='text' placeholder='Enter the content of the  sound to hear'>
     </input>
     <button onClick={create}>
        Create voice
     </button></div>
    <div>
      
    </div>
      </div>
     <div className='voice_div'> 
    
     <ReactPlayer
        url='https://youtu.be/7vpW3-J_wr4?si=Sqye1xFdMLI9PCK9'
        width="640"
        height="360"
        controls={false}
      />
       {/* <ReactAudioPlayer
        src=''
        autoPlay={true}
        controls
      /> */}
       <audio controls>
        <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      </div>
    </div>

    </div>
  )
}

