import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MedsList from './components/MedsList';
import MedsDetails from './components/MedsDetails';
import MedsForm from './components/MedsForm';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Aboutus from './components/pages/Aboutus';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/medlist" element={<MedsList />} />
          <Route path="/meds/:id" element={<MedsDetails />} />
          <Route path="/add" element={<MedsForm />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
