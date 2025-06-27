import './App.css';

import React, { Component } from 'react'
import Navebar from './components/Navebar';
import Allnews from './components/Allnews';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {

  render() {
    return (
      <div>
        <Navebar/>
        <Allnews/>
        {/* <Router>
        <Navebar/>
        <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<Allnews/>}></Route>
          <Route exact path="/general" element={<Allnews category="general"/>}></Route>
          <Route exact path="/sports" element={<Allnews category="sports"/>}></Route>
          <Route exact path="/business" element={<Allnews category="business"/>}></Route>
          <Route exact path="/techonology" element={<Allnews category="techonology"/>}></Route>
          <Route exact path="/health" element={<Allnews category="health"/>}></Route>
          <Route exact path="/entertainment" element={<Allnews category="entertainment"/>}></Route>
         </Routes>
        </div>
        </Router> */}
      </div>  
    )
  }
}

export default App
