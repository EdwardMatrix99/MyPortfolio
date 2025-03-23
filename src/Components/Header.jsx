
import React, { useEffect, useState } from 'react';
import '../pages/Home.css';


const Header = () => {


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Documents/edwardCampos.pdf';
    link.download = 'Edward_Campos_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
   
   
 
 <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >

  <h2 className='nombre'> Edward Campos </h2>

        <ul className="lista">

          <li className="nav-item">
            <a className="enlace" id='casa' href="#about">Home</a>
          </li>
          <li className="nav-item">
            <a className="enlace" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="enlace" href="#technologies">Technologies</a>
          </li>
          <li className="nav-item">
            <a className="enlace" href="#">Contact Info</a>
          </li>
          <li className="nav-item">
            <button className="enlace" onClick={handleDownload} id='descarga'>Download CV</button>
          </li>
        </ul>
      </div>

 



  )
}

export default Header
