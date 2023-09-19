// packages
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-steel-light'>
      <nav className='p-4 z-10'>
        <Navbar />
      </nav>
      <div className='flex-grow p-4 z-0'> {/* Container for Outlet content */}
        <Outlet /> {/* Renders child routes */}
      </div>
      <footer className='p-4 z-0'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
