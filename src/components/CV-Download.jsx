import React from 'react';

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
        <div className=''>
            {/* Button to download the PDF */}
            <button
                className="px-4 py-2 bg-blue-600 text-gray-300 rounded-md hover:bg-blue-800"
                onClick={handleDownloadPDF}
            >
                Download PDF
            </button>
        </div>
    )
};

export default CVButton();