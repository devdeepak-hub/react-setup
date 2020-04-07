import React, { Component} from "react";

import "./App.scss";

import rocket from '../public/svg/rocket1.svg';
import { TweenMax } from "gsap";
import  Alert  from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
 
class App extends Component{
  render(){
    console.log('this is working');
    let alert = document.getElementById("alertBox");
    TweenMax.to(alert, 2, {width:"200px", height:"550px"});
    return(
      <>
        <h1> Hello, World! </h1>
        <svg className="svg-container" height="400" width="100%">
            <use xlinkHref={` #${rocket.id} `} x="0" y="10" width="100" height="100" fill="red"/>
        </svg>
	    
            <Alert key="key1" variant="primary">
                This is a primary alert—check it out!
            </Alert>
            <Button variant="primary">Primary</Button>
           
      </>
    );
  }
}

 
export default App;
/**
* import {hot} from "react-hot-loader";
* export default hot(module)(App);
*/
