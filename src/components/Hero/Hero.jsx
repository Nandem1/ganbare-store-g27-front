import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  console.log("CL7 en CarouselHomeMobile.jsx: Entre a la funcion autoScrollCarousel");

  useEffect(() => {
    autoScrollCarousel();
  }, []);

  let scrollPosition = 0;

  function animateScroll() {
    const carousel = document.querySelector('.carousel-container');
    const carouselWidth = carousel.offsetWidth;
    const slideWidth = carousel.querySelector('.slide-mobile').offsetWidth;
    const scrollAmount = slideWidth + 10; // 10px de separación entre diapositivas

    if (scrollPosition >= carousel.scrollWidth - carouselWidth) {
      scrollPosition = 0;
    } else {
      scrollPosition += scrollAmount;
    }

    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    setTimeout(animateScroll, 3000); // Ajusta el tiempo para cambiar de diapositiva (por ejemplo, 3000 milisegundos para 3 segundos)
  }

  function autoScrollCarousel() {
    animateScroll();
  }
  return (
    <Container fluid className='hero-bg w-100 h-100 d-flex justify-content-between align-items-center'>
      <div className="carousel-container">
        <div className="carousel-inner-mobile">
          <div className='bgHeroImg slide-mobile'><Image src='/src/assets/hero/bg1.jpg' /></div>
          <div className='bgHeroImg slide-mobile'><Image src='/src/assets/hero/bg2.jpg' /></div>
          <div className='bgHeroImg slide-mobile'><Image src='/src/assets/hero/bg3.jpg' /></div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
