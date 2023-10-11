import React from 'react';

const ContactButton = ({ openModal }) => {
  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Open Modal
      </button>
    </div>
  );
};

export default ContactButton;
