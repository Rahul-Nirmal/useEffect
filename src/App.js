import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Header from "./components/Header";

function App() {

  useEffect(()=>{
    console.log("useEffect Called");
  })

  console.log("Function body");

  return (
    <div className='App'>
    <Header />
    {console.log("Inside JSX")}
    </div>
  );
}

export default App;
