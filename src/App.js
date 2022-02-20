import React, { Component } from 'react';
import './App.css';
import Typical from 'react-typical';
import homeButton from './imgs/topLeft.svg';
import ktown from './imgs/ktown.png';
import southCentral from './imgs/southcentral.png';
import signup from './imgs/signup.svg';
import { Map, GoogleApiWrapper } from "google-maps-react";


class App extends Component {
  render(){
  return (

    <div className="App">

      <div className="ktown">
        <img src={ktown}/>
      </div>
      
      <div className="sc">
        <img src={southCentral}/>
      </div>

      <header className="App-header">
      
      <div className="topLeft"> 
        <img src={homeButton}/>
      </div>

      <div className="downArrow"> 
        <img src="https://media.giphy.com/media/W6LvJ3rgpb68b2EA11/giphy.gif"></img>
      </div>

        <h1 className="mainWords">
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Explore 🌎',
            6000,
            'Study 📚',
            6000,
            'Love 💕',
            6000
          ]}
        />
        <br></br>
        L.A. like a local
        </h1>
        <p>
          There is <strong>so much more</strong> to L.A. than you see online
          <br></br>
          Get the <strong>REAL</strong> Los Angeles experience during your time here
          <br></br>
          No more <strike>Hollywood</strike> or <strike>Beverly Hills</strike>... learn from <strong>local Angelenos</strong> themselves
        </p>
      </header>

      <div className="register">
        <a href="https://github.com">
          <img src={signup}></img>
        </a>
        <img src="https://media.giphy.com/media/PkSCS46q1iZu9jQoTf/giphy.gif"/>
      </div>



      <div id="googleMap">
        <Map
          google = {this.props.google}
          style = {{width: "100%", height:"70%"}}
          zoom = {10}
          initialCenter = {
            {
              lat: '34.029362',
              lng: '-118.285248'
            }
          }
        />
      </div>

    </div>

  );
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyCIHsqa5s72r6icCd-uOn-jNwxQvuyl-Hg'})(App);
