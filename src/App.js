import './App.css';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const accesKey = 'BQRNxMuLlUE9XqIgSxYeqv90mRrqANvFsNFVWU7ymTk'
function App() {
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  React.useEffect(()=>{
    getPhotos()
  },[page])

  function getPhotos() {
    fetch(`https://api.unsplash.com/photos?client_id=${accesKey}&page=${page}`)
    .then(res => res.json())
    .then(data => {
      setImages(images => [...images, ...data])
    })
  }
  return (
    <div className="App">
      <h1>Unplash Image Gallery!</h1>

      <form>
        <input type='text' 
        placeholder='Search Unsplash...'/>
        <button>Search</button>
      </form>

      <InfiniteScroll
  dataLength={images.length} //This is important field to render the next data
  next={() => {
    setPage(page => page +1)
    getPhotos()
  }}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
<div className='image-grid'>
        {images.map((image, index) => {
          return (
            <a className='image' 
            key={index} 
            href={image.links.html}
            target="_blank"
            rel='nooper noreferrer'
            >
            <img src={image.urls.regular}
             alt={image.alt_description}/>
          </a>
          )
        })}
      </div>
</InfiniteScroll>
      
    </div>
  );
}

export default App;
