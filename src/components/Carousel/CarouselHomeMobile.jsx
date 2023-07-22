import React, { useEffect } from 'react'
import './CarouselHomeMobile.css'
import { Image } from 'react-bootstrap';

function CarouselHomeMobile() {
  // Función para desplazar automáticamente el carrusel
  function autoScrollCarousel() {
    console.log("CL7 en CarouselHomeMobile.jsx: Entre a la funcion autoScrollCarousel");
    const carousel = document.querySelector('.carousel-container');
    const carouselWidth = carousel.offsetWidth;
    const slideWidth = carousel.querySelector('.slide-mobile').offsetWidth;
    const scrollAmount = slideWidth + 10; // 10px de separación entre diapositivas
    let scrollPosition = 0;

    function animateScroll() {
      if (scrollPosition >= carousel.scrollWidth - carouselWidth) {
        scrollPosition = 0;
      } else {
        scrollPosition += scrollAmount;
      }

      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setTimeout(animateScroll, 3000); // Ajusta el tiempo para cambiar de diapositiva (por ejemplo, 3000 milisegundos para 3 segundos)
    }

    // Llamar a la función animateScroll() para iniciar el desplazamiento automático
    animateScroll();
  }


  // Llamar a la función cuando el documento esté completamente cargado
  useEffect(() => {
    autoScrollCarousel();
  }, [])


  return (
    <div className="carousel-container">
      <div className="carousel-inner-mobile">
        <div className='buscas-box-img-mobile slide-mobile'><Image src='../src/assets/homepage/nintendoswitchdocked.png' /></div>
        <div className='buscas-box-img-mobile slide-mobile'><Image src='../src/assets/homepage/crysis2.png' /></div>
        <div className='buscas-box-img-mobile slide-mobile'><Image src='../src/assets/homepage/mangas.png' /></div>
        <div className='buscas-box-img-mobile slide-mobile'><Image src='../src/assets/homepage/kimetsufigura.png' /></div>
        <div className='buscas-box-img-mobile slide-mobile'><Image src='../src/assets/homepage/poleronotaku.png' /></div>
      </div>
    </div>
  )
}

export default CarouselHomeMobile