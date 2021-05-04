import React, { Component } from "react";
import useWindowSize from './customhooks/useWindowSize'
import "./App.css";

function AppHooks(){
  const onSmallScreen = useWindowSize();

    return (
      <div>
        OnSScreen :{onSmallScreen.toString()}
      </div>
    );
}

export default AppHooks;
