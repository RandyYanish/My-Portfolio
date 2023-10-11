import React, { useState } from 'react';
import Hero from '../components/Hero';
import AboutIntro from '../components/About-intro';
import CVDownload from '../components/CV-Download';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import ContactButton from '../components/ContactButton';
import ContactFormModal from '../components/ContactFormModal';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form data using e.target.name.value, e.target.email.value, and e.target.message.value
    closeModal();
  };

  return (
    <div className=''>
      <div id='Home' className='my-4'>
        <Hero />
      </div>
      <div id='About'>
        <AboutIntro />
      </div>
      <div id='Skills'>
        <Resume />
        <CVDownload />
      </div>
      <div id='Projects'>
        <Projects />
      </div>
      <div id='Contact'>
        <ContactButton onClick={openModal}/>
        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default HomePage;
