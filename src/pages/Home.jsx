import React from 'react';
import './Home.css';
import Header from '../Components/Header'; 
import Footer from '../Components/Footer';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import Projects from '../Components/Projects';

const Home = () => {
  return (
    <div className='containerDom'>
      <img className='fondo' src='./technologiesimages/realjs.webp' alt='fondo' /> 
      <Header /> 

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="technologies">
        <Technologies />
      </section>

      <Footer /> 
    </div>
  )
}

export default Home
