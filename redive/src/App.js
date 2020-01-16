import React from 'react';
import './App.css';
import images from './data.js'
import NavBar from './container/NavBar'
import Coverpage from './presentation/Coverpage'
import ImageContainer from './container/ImageContainer'


function App() {
  return (
    <div>
    <NavBar />
    <Coverpage />
    <ImageContainer images={images} />

  );
}

export default App;
