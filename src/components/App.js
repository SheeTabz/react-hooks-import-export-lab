import React from "react";
import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About";
import TimeStamp from "./TimeStamp";
function App() {
  return (
    <div>
      <NavBar />
      <Home username="iza" city="New York"/>
      <About image="https://i.imgur.com/mV8PQxj.gif"/>
      <TimeStamp/>
    </div>
  );
}

export default App;
