// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   // Link
// } from 'react-router-dom';
// import { Router, Switch, Route } from 'react-router-dom';

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');    //Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f2e';
      showAlert("Dark mode has been enabled", "success");
      // document.title='textUtils- Dark mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f0f0f5';
      showAlert("Light mode has been enabled", "success");
      // document.title='textUtils- Light mode'
    }
  }

  return (
    <>
      {/* <BrowserRouter>  */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/home" element={<TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />
            {/* <Route path="about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
