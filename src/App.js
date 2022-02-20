import React, { Component } from 'react';
import './App.css';
import Typical from 'react-typical';
import homeButton from './imgs/topLeft.svg';
import ktown from './imgs/ktown.png';
import southCentral from './imgs/southcentral.png';
import signup from './imgs/signup.svg';
import { Map, GoogleApiWrapper } from "google-maps-react";
import food from './imgs/flan.png';
import shop from './imgs/shop.png';
import fun from './imgs/fun.png';
import hangout from './imgs/hangout.png';
import corn from './imgs/corn.png';
import flowers from './imgs/flowers.png';
import form from './imgs/formm.png';

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

      <div className='recList'>
          <h1>Get the best recommendations in the city:</h1>
          <br></br>
          <br></br>
          <br></br>
          <div class="moving">
            <div class="mover-1"></div>
      </div>

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

      <div className='moreButtons'>
        <div className='food'><img src={food}></img></div>
        <div className='shop'><img src={shop}></img></div>
        <div className='fun'><img src={fun}></img></div>
        <div className='hangout'><img src={hangout}></img></div>
      </div>

      <div className='cornflowers'>
        <div className='corn'><img src={corn}></img></div>
        <div className='flowers'><img src={flowers}></img></div>
      </div>

      <div className='formm'>
        <div className='locals'> <h1>For the locals...</h1></div>
        <div className='form'><img src={form}></img></div>
      </div>

    </div>

  );
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyCIHsqa5s72r6icCd-uOn-jNwxQvuyl-Hg'})(App);
