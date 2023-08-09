import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import './Footer.css'
import { useNavigate } from 'react-router-dom';


function Footer() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubscribe = () => {
    navigate('/loginRegister');

    setTimeout(() => {
      const scrollToTop = () => {
        const scrollOptions = {
          top: 285,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      };

      scrollToTop();
    }, 50); // Cambia el valor del tiempo de espera si lo deseas
  };

  return (
    <>
      {/* Contáctanos - Mis compras y Tiendas y Horarios */}
      <Container>
        <Row className='py-5'>
          <Col className='border-end border-4'>
            <div className='d-flex flex-column align-items-center'>
              <Image className='pre-footer-img' src='../src/assets/footer/contacto_vector.png' />
              <h2>Contáctanos</h2>
              <p>Te ayudamos con dudas y solicitudes</p>
            </div>
          </Col>
          <Col className='border-end border-4'>
            <div className='d-flex flex-column align-items-center'>
              <Image className='pre-footer-img' src='../src/assets/footer/compras_vector.png' />
              <h2>Mis compras</h2>
              <p>Haz seguimiento y descarga de tus boletas</p>
            </div>
          </Col>
          <Col>
            <div className='d-flex flex-column align-items-center'>
              <Image className='pre-footer-img' src='../src/assets/footer/tienda_vector.png' />
              <h2>Tiendas y Horarios</h2>
              <p>Consigue nuestras tiendas físicas y horarios</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* // Resto del Footer - Suscribete y recibe ofertas - Ganbare Store Derechos Reservados */}
      {!user && <div className='border rounded-pill m-auto position-relative z-1 suscribe-div p-3'>
        <div className='d-flex justify-content-evenly align-items-center flex-grow-1 px-3'>
          <h2 className='m-0 p-0 w-100'>Suscríbete y recibe ofertas y novedades</h2>
          <button onClick={handleSubscribe} className='suscribe-button rounded-pill px-4 py-2 m-auto'>Suscríbete</button>
        </div>
      </div>}
      <Container fluid className='footer-main w-100 h-100 d-flex justify-content-between align-items-center z-n1'>
        <Container>
          <Row xs={2} md={4} lg={4} className='footer-row m-auto'>
            <Col className='m-auto'>
              <div className='h-100 d-flex flex-column align-items-start'>
                <h3 className='h3-footer'>Contacto</h3>
                <div className='opacity-75'>
                  <p className='m-0 link-to-category-footer'>ventas@ganbarestore.cl</p>
                  <p className='link-to-category-footer'>+56 9 6666 6666</p>
                </div>
              </div>
            </Col>
            <Col className='m-auto'>
              <div className='d-flex flex-column align-items-start'>
                <h3 className='h3-footer'>Categorias Destacadas</h3>
                <div className='opacity-75 d-flex flex-column'>
                  <a href='' className='m-0 link-to-category-footer'>Juguetes</a>
                  <a href='' className='m-0 link-to-category-footer'>Consolas</a>
                  <a href='' className='link-to-category-footer'>Mangas</a>
                </div>
              </div>
            </Col>
            <Col className='m-auto'>
              <div className='d-flex flex-column align-items-start'>
                <h3 className='h3-footer'>Redes Sociales</h3>
                <div className='opacity-75 d-flex flex-column'>
                  <a href='' className='m-0 link-to-category-footer'>Facebook</a>
                  <a href='' className='m-0 link-to-category-footer'>Instagram</a>
                  <a href='' className='link-to-category-footer'>Twitter</a>
                </div>
              </div>
            </Col>
            <Col className='m-auto'>
              <div className='d-flex flex-column align-items-start'>
                <h3 className='h3-footer'>Mi cuenta</h3>
                <div className='opacity-75 d-flex flex-column'>
                  <a href='/loginRegister' className='m-0 link-to-category-footer'>Ingresa</a>
                  <a href='/loginRegister' className='m-0 link-to-category-footer'>Registrar</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='copyright-footer-end p-3 d-flex justify-content-center align-items-center h-100'>
        <p className='text-center h-100 p-0 m-0 text-white'>© 2023 Ganbare Store. Todos los derechos reservados. Desarrollado por Dream Team G27.</p>
      </Container>
    </>
  )
}

export default Footer