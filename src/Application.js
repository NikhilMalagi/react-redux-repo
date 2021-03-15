import React, { Component } from "react";
import "./App.css";
import Wrapper from './render-eg/Wrapper';
import Counter1 from './render-eg/Counter1';
import Counter2 from './render-eg/Counter2';

class Application extends Component {
  render() {
    return (
      <div className="App">
           <Wrapper render={(count,incCount) => {
               return <Counter1 count={count} incCount={incCount} />
           }}/>
           <Wrapper render={(count,incCount) => {
               return <Counter2 count={count} incCount={incCount} />
           }}/>
      </div>
    );
  }
}

export default Application;
