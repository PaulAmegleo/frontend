import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedsList from './components/MedsList';
import MedsDetails from './components/MedsDetails';
import MedsForm from './components/MedsForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MedsList />} />
          <Route path="/meds/:id" element={<MedsDetails />} />
          <Route path="/add" element={<MedsForm />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
