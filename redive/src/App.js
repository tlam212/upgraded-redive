import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import images from './data.js'
import NavBar from './container/NavBar'
import CoverPage from './presentation/CoverPage'
import ImagesContainer from './container/ImagesContainer'
import SignUpForm from './presentation/SignUpForm'
import LoginForm from './presentation/LoginForm'
import CollectionsContainer from './container/CollectionsContainer'





function App() {

  const [user, setUser] = useState("Beyonce");
  const [collection, setCollection] = useState([])

  const addToCollection = (pic) => {
    setCollection([pic, ...collection])
  }

  const removeImg = (imageID) => {
    setCollection(collection.filter(image => image.id !== imageID))
  }


  return (

    <div>
      <NavBar user={user}/>


      <Route exact path="/" render={() => <ImagesContainer images={images} addToCollection={addToCollection}/>}/>
      <Route exact path="/login" render={() => <LoginForm />}/>
      <Route exact path="/signup"  render={() => <SignUpForm />}/>
      <Route exact path="/collection" render={() => <CollectionsContainer removeImg={removeImg} images={collection}/>}/>

    </div>

  );
}

export default App;
