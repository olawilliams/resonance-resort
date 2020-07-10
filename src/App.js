import React, { useEffect } from 'react';

import './App.css';
import { getImages } from './firebase/firebase-utils'
import DATA_JS from './data'

import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage-component';
import RoomPage from './pages/roompage/roompage-component'
import SignIn from './pages/signin-page/signin-component';
import SignUp from './pages/signup-page/signup-component';
import Header from './components/header/header-component';
import SingleRoomPage from './pages/singleroom-page/singleroom-page-component'

const  App = ()  => {
  useEffect(() => {
    getImages();
  }, [])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/rooms' component={RoomPage}/>
        <Route exact path='/login' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/rooms/:roomId' component={SingleRoomPage}/>
        
      </Switch>
      
    </div>
  );
}

export default App;
