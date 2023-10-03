// packages
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import CursorRadialGradient from './components/CursorRadialGradient.jsx';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-steel-light dark:from-gray-950 dark:to-slate-900 duration-500 z-0'>
        <CursorRadialGradient />
        <nav className='p-4 z-9'>
          <Navbar />
        </nav>
        <div className='flex-grow p-4'> {/* Container for Outlet content */}
          <div className='overflow-y-auto max-h-full'>
            <Outlet /> {/* Renders child routes */}
          </div>
        </div>
        <footer className='p-4 z-9 scale-100'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
