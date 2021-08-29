import React from 'react';
import Welcome from './Pages/Welcome'
import Login from './Pages/Login'
import { BrowserRouter as Router, Switch, Link, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (

    
    <BrowserRouter>

      <Welcome />
     
      {/* <Login/> */}
      {/* // switcher en le login et le welcome with state of logiIN user  */}
    </BrowserRouter>
  )
}

