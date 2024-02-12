//import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InitialScreen from './pages/initialScreen';
import UpdateScreen from './pages/updateScreen';
import RegisterScreen from './pages/registerScreen';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <InitialScreen /> } />
      <Route path="/update" element={ <UpdateScreen /> } />
      <Route path="/register" element={ <RegisterScreen /> } />
    </Routes>
  );
}

export default App;
