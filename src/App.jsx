import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import "./style.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRightFromBracket, faVideo, faUserPlus, faEllipsis, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFile, faFileImage } from '@fortawesome/free-regular-svg-icons';
library.add(faRightFromBracket, faVideo, faUserPlus, faEllipsis, faFile, faFileImage, faPaperPlane);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
