import React, { useState } from 'react';
import Navbar from './sections/navbar';
import Footer from './sections/footer';
import Contact from './sections/contact';

import '../styles/style.css';

export default function Welcome() {
  const [currentPage, setCurrentPage] = useState('Contact');

  const renderPage = () => {
    /*if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    
    return <Resume />;*/
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    
    <main>  
        {renderPage()}
        <Footer />
        </main>
    </div>
  );
}
