import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Start from './components/Start';
import Lode from './components/Lode';
import Learningpath from './components/Learningpath';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='load' element={<Lode/>} />
      <Route path='learn' element={<Learningpath/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
