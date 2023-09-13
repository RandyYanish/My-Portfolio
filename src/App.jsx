import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet /> {/* Renders child routes */}
      <Footer />
    </div>
  );
}

export default App;
