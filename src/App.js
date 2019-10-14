import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App  = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home}></Route>
    <Route path="/About" component={About}></Route>
    <Route path="/Contact" component={Contact}></Route>
  </div>
);

export default App;
