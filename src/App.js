import './App.css';
import React from 'react';
const accesKey = 'BQRNxMuLlUE9XqIgSxYeqv90mRrqANvFsNFVWU7ymTk'
function App() {
  const [images, setImages] = React.useState([]);
  React.useEffect(()=>{
    fetch(`https://api.unsplash.com/photos?client_id=${accesKey}`)
    .then(res => res.json())
    .then(data => {
      setImages(data)
    })
  },[])
  return (
    <div className="App">
      <h1>Unplash Image Gallery!</h1>

      <form>
        <input type='text' 
        placeholder='Search Unsplash...'/>
        <button>Search</button>
      </form>

      <div className='image-grid'>
        {images.map((image, index) => {
          return (
            <div className='image' key={index}>
            <img src={image.urls.regular}
             alt={image.alt_description}/>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
