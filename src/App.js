import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js';
import "./App.scss";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("first render");
    axios.get(
      "https:api.nasa.gov/planetary/apod?api_key=cvQfsM1Yd2opQ3UAQEufPMMPRinnTReNGgUeirlt&date=2019-04-27")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  // uncomment for array api
  //
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    console.log("first render");
    axios.get("https:henry-mock-nasa-api.herokuapp.com/api")
      .then(res => {
        console.log(res.data);
        setPhotos(res.data);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    {/* {data */}
    {/*  ? <PhotoCard title={data.title} */}
    {/*               url={data.url} */}
    {/*               explanation={data.explanation} */}
    {/*               date={data.date} /> */}
    {/*    : <div>Loading</div>} */}

      {/* Uncomment for array api */}
      <div className="photo-cards">
        {photos.map(data => (
          <PhotoCard title={data.title}
                     url={data.url}
                     explanation={data.explanation}
                     date={data.date} />
        ))}
      </div>
    </div>
  );
}

export default App;
