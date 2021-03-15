import React, { Component } from "react";
import "./App.css";
import ClickCounter from './hoc-eg/ClickCounter';
import Counter1 from './render-eg/Counter1';
import Counter2 from './render-eg/Counter2';

class AppHOC extends Component {
  render() {
    return (
      <div className="App">
         <ClickCounter test={"hi there"}/>
      </div>
    );
  }
}

export default AppHOC;
