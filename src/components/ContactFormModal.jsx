import React from 'react';

const ContactFormModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`fixed inset-0 bg-metal-950 dark:bg-ice-50 bg-opacity-20 dark:bg-opacity-20 flex flex-col items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className='dark:bg-ice-dark dark:text-ice-light text-2xl bg-blue-300 p-10 rounded-3xl'>
        <div className='text-right'>
          <button
            className='modal-close'
            onClick={closeModal}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 5.07959L13 12.9996'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M5 12.9199L13 4.99991'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
        <div className='text-center'>
          <p className='font-extrabold text-md p-2'>Randall Taylor</p>
          <p className='font-serif text-md p-2'>Full-Stack Developer</p>
          <p className='font-sans text-md p-2'>rtaylorfargo@gmail.com</p>
          <p className='font-thin text-md p-2'>Thanks for stopping by!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
