import React from 'react';
import './App.css';
import images from './data.js'
import NavBar from './container/NavBar'
import ImageContainer from './container/ImageContainer'


function App() {
  return (
    <div>
    <NavBar />
    <ImageContainer images={images}/>
    </div>
  );
}

export default App;
