import React,{useState} from "react";
import axios from 'axios';
function App() {
  const[data,setData]=useState({});
  const[location,setLocation]=useState('');
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=aa8653d3e1c34407284b906cfb8ab48d`
  const searchLocation =(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="App">
      <div className="search">
        <input          
          value={location}
          onChange={event=>setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='enter location'
          type='text'
        />
      </div>
      <div className="container">
       <div className="top">
        <div className="location"><p>{data.name}</p></div>
        <div className="temp">
         {  data.main? <h1>{((data.main.temp-32)/9*5).toFixed(2)}* C</h1>:null}
        </div>
        <div className="condition">
          {data.weather?<p1>{data.weather[0].main}</p1>:null}
        </div>
       </div>
       {
         data.name !== undefined && 
         <div className="bottom">
         <div className="feels">
           {data.main?<p className="bold">{((data.main.temp-32)/9*5).toFixed(2)}* C</p>:null}
           <p>Feels like</p>
         </div>
         <div className="humidity">
           {data.main?<p className="bold">{data.main.humidity}%</p>:null}
           <p>Humidity</p>
         </div>
         <div className="wind">
           {data.wind?<p className="bold">{data.wind.speed}%</p>:null}
           <p>Wind speed</p>
         </div>
       
       </div>
       }
    </div>
    </div>
  );
}

export default App;
