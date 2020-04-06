import React, { Component} from "react";

import "./App.scss";

import rocket from '../public/svg/rocket1.svg';

class App extends Component{
  render(){
    return(
      <>
        <h1> Hello, World! </h1>
        <svg className="svg-container" height="400" width="100%">
            <use xlinkHref={`#${rocket.id}`} x="0" y="10" width="100" height="100" fill="red"/>
        </svg>
      </>
    );
  }
}

 
export default App;
/**
* import {hot} from "react-hot-loader";
* export default hot(module)(App);
*/
