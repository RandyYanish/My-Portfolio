import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function CVButton() {
  const pdfUrl = process.env.PUBLIC_URL + '/Randall-Taylor-Resume.pdf';

  return (
    <div className='flex justify-center'>
      {/* Button to download the PDF */}
      <a href={pdfUrl} target='_blank' rel='noreferrer'>
        <button className='explore-btn rounded-full hover:bg-ice-light hover:text-magenta-dark bg-ice-dark py-2 px-8 text-steel-light text-xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark pointer-events-auto flex items-center'>
          View full resume
          <FaRegArrowAltCircleRight size={20} className=' ml-2' />
        </button>
      </a>
    </div>
  );
}

export default CVButton;
