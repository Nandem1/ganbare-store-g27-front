import React from 'react'
import './Home.css'
import { Image, Container, Row, Col } from 'react-bootstrap'
import CarouselHomeMobile from '../components/CarouselHomeMobile'

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className='hero-section bg-danger d-flex justify-content-center align-items-center' >
        <div>
          <h1>HERO SECTION</h1>
        </div>
      </div >
      {/* END OF HERO SECTION  */}
      {/* CATEGORY AND CARDS */}
      <div className='category-container rounded-pill p-3 d-flex justify-content-around align-items-center shadow mt-3 ms-3'>
        <a href="" className='category-link text-decoration-underline'>Categorias</a>
        <a href="" className='category-link'>Electronica</a>
      </div>
      <div className='mt-3 hero-section bg-danger d-flex justify-content-center align-items-center' >
        <div>
          <h1>CARDS SECTION</h1>
        </div>
      </div >
      {/* END OF CATEGORY AND CARDS */}
      {/* Descuentos div romboide Desktop*/}
      <div className='desktop discount-section d-flex justify-content-center align-items-center'>
        <div className='desktop descuentos-div-romboide p-3 me-5'>
          <div className='contenido-romboide d-flex align-content-center justify-content-between px-3'>
            <div className='d-flex align-items-center'>
              <Image className='discount-image-romboide me-2' src='../src/assets/homepage/60percentdiscount.png' />
              <h2>En juegos para Switch</h2>
            </div>
            <div className='d-flex'>
              <Image className='switch-games-discount' src='../src/assets/homepage/supermarioparty.png' />
              <Image className='switch-games-discount' src='../src/assets/homepage/pokemon.png' />
              <Image className='switch-games-discount' src='../src/assets/homepage/mariokart.png' />
              <Image className='switch-games-discount' src='../src/assets/homepage/animalcrossing.png' />
              <Image className='switch-games-discount' src='../src/assets/homepage/zelda.png' />
              <Image className='switch-games-discount' src='../src/assets/homepage/builders.png' />
            </div>
          </div>
        </div>
      </div>
      {/* END OF Descuentos div romboide Desktop*/}
      {/* Descuentos div romboide Mobile*/}
      <div className='mobile descuentos-mobile-container p-2'>
        <div className='d-flex justify-content-evenly align-items-center mt-3'>
          <Image className='discount-image-romboide' src='../src/assets/homepage/60percentdiscount.png' />
          <h2>En juegos para Switch</h2>
        </div>
        <div className='d-flex justify-content-center mt-3 mb-4'>
          <Image className='switch-games-discount' src='../src/assets/homepage/mariokart.png' />
          <Image className='switch-games-discount' src='../src/assets/homepage/animalcrossing.png' />
          <Image className='switch-games-discount' src='../src/assets/homepage/zelda.png' />
        </div>
      </div>
      {/* END OF Descuentos div romboide Mobile*/}
      {/* Todo lo que buscas Desktop*/}
      <div className='desktop lo-que-buscas-box d-flex justify-content-center align-items-center p-3 my-3'>
        <h2>Encuentra todo lo que buscas</h2>
      </div>
      <div className='desktop d-flex justify-content-evenly align-items-center mb-3'>
        <div className='buscas-box-img desktop'><Image src='../src/assets/homepage/nintendoswitchdocked.png' /></div>
        <div className='buscas-box-img desktop'><Image src='../src/assets/homepage/crysis2.png' /></div>
        <div className='buscas-box-img desktop'><Image src='../src/assets/homepage/mangas.png' /></div>
        <div className='buscas-box-img desktop'><Image src='../src/assets/homepage/kimetsufigura.png' /></div>
        <div className='buscas-box-img desktop'><Image src='../src/assets/homepage/poleronotaku.png' /></div>
      </div>
      {/* END OF Todo lo que buscas Desktop*/}
      {/* Todo lo que buscas Mobile */}
      <Container className='mobile'>
        <CarouselHomeMobile />
      </Container>
      {/* Nuestras marcas */}
      <Container className='nuestras-marcas-container mt-3'>
        <h2 className='text-center my-3 pt-3'>Nuestras marcas</h2>
        <Row lg={5} md={5} sm={1} xs={1}>
          <Col className='py-3'>
            <Image className='marcas-img m-auto' src='../src/assets/homepage/nintendologo.png'/>
          </Col>
          <Col className='py-3'>
            <Image className='marcas-img m-auto' src='../src/assets/homepage/funkologo.png'/>
          </Col>
          <Col className='py-3'>
            <Image className='marcas-img m-auto' src='../src/assets/homepage/marvellogo.png'/>
          </Col>
          <Col className='py-3'>
            <Image className='marcas-img m-auto' src='../src/assets/homepage/dclogo.png'/>
          </Col>
          <Col className='py-3'>
            <Image className='marcas-img m-auto' src='../src/assets/homepage/pslogo.png'/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home