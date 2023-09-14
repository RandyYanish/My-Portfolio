// packages
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App flex-col'>
      <nav className='Navbar container'>
        <Navbar />
      </nav>
      <div className='container'> {/* Container for Outlet content */}
        <Outlet /> {/* Renders child routes */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
