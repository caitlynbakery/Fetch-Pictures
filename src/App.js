import React, {useState, useEffect} from 'react';
import fetch from "node-fetch";

function App() {

  const [flowerImage, setFlowerImage] = useState({});

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=15419233-8d28ff99c4a3abd7ff68c5e3b&q=blue+animals&image_type=photo')
    .then(res => res.json())
    .then(json => {
      const randomNum = Math.floor(Math.random() * 20);
      console.log(json.hits[randomNum])
      setFlowerImage(json.hits[randomNum]);
    });
  }, []);
  

  return (
    <div className="container pt-3">
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h1 className="display-3">{flowerImage.tags}</h1>
            <p>by {flowerImage.user}</p>
            <p> 👍 {flowerImage.likes}
                <span className="pl-3">👀 {flowerImage.views}</span>
            </p>
          </div>
          {/* begin second column */}
          <div className="col">
            <img className="img-fluid" src={flowerImage.webformatURL} alt="FLOWER" />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
