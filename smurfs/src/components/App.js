import React, { Component, useState, useEffect } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { SmurfListContext } from '../contexts/SmurfListContext';
import { SmurfFormContext } from '../contexts/SmurfFormContext';
import axios from 'axios';

function App () {
  
  const [smurfList, setSmurfList] = useState([{}]);
  const [smurfForm, setSmurfForm] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => {
        console.log(res.data);
        setSmurfList(res.data);
    })
  }, [smurfForm]);

  return (
    <div className="App">
      <h1>My Smurf Village</h1>
      <SmurfFormContext.Provider value={setSmurfForm}>
        <SmurfForm />
      </SmurfFormContext.Provider>
      
      <SmurfListContext.Provider value={smurfList}>
        <SmurfList />
      </SmurfListContext.Provider>
    </div>
  );

}

export default App;
