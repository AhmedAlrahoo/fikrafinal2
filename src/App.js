import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Contact from './component/Contact'
import Footer from "./component/Footer";
import Login from "./component/login/Login";
import { Route, Switch } from 'react-router-dom'
import Result from "./component/Result";
function App() {
  const [libs, setLibs] = useState([]);

  useEffect(() => {
    fetch("http://lab.fikracamp.com/api/labs")
      .then((res) => res.json())
      .then((data) => setLibs(data));
  }, []);

  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <Landing libs={libs} setLibs={setLibs} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/login/result">
          <Result />
      </Route>
    </div>
  );
}

export default App;