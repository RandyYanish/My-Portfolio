import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

function CVButton() {
    // function to generate and download a PDF
    const handleDownloadPDF = () => {
        // Path to pdf file in public folder
        const pdfPath = '/Randall-Taylor-Resume.pdf';

        // Create a hidden anhcor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'Randall-Taylor-Resume.pdf';
        anchor.style.display = 'none';

        // Append the anchor element to the documner and click it to trigger the download
        document.body.appendChild(anchor);
        anchor.click();

        // Clean up by removing the anchor element
        document.body.removeChild(anchor);
    };

    return (
        <div className='flex justify-center'>
            {/* Button to download the PDF */}
            <button
                className='explore-btn rounded-full hover:bg-ice-light hover:text-magenta-dark bg-ice-dark py-2 px-8 text-steel-light text-xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark pointer-events-auto flex items-center'
                onClick={handleDownloadPDF}
            >
                Download Resume<FaArrowAltCircleDown size={20} className=' ml-2'/>
            </button>
        </div>
    )
};

export default CVButton;