import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Navbar from './Components/Navbar';
import './Components/styles.css'

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  );
}
