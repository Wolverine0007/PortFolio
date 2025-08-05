import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

function ResumeDownload() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Resume Sanket.pdf'; 
    link.download = 'Sanket_Banate_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="text-center">
        <div className="mb-4">
          <FaFilePdf className="text-red-500 text-4xl mx-auto mb-2" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Download Resume
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Get a detailed overview of my skills, experience, and qualifications
          </p>
        </div>
        
        <button
          onClick={handleDownload}
          className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
        >
          <FaDownload className="text-lg" />
          <span>Download PDF</span>
        </button>
        
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeDownload; 