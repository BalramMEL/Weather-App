import React, {  useState } from "react";
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
 const apiKey = "14ac49bd33c39879160aed3b044da4eb"
 const [inputCity, setInputCity] = useState("")
 const[data, setData] = useState({})

 const getWeatherDetails = (cityName) => {
  if(!cityName) return
  const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
    console.log("response", res.data)
    setData(res, data)
  }).catch((err) => {
    console.log("err", err)
  })
 }

const handleChangeInput = (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  getWeatherDetails(inputCity)
}


  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-5">
          <input type="text" className="form-control" 
           value={inputCity}
           onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>  

      {Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">
        <div className="shadow-lg p-3 mb-5 bg-body rounded weahterResultBox">
          <img className="weatherIcon"
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

          <h5 className="weatherCity">
            {data?.name}
          </h5>
          <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>

        </div>
      </div>   
}
    </div>
  );
}

export default App;
