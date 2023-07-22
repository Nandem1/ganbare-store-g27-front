import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import './Header.css'

function Header() {
  return (
    <>
      <Container fluid className='header-bg w-100 h-50 d-flex justify-content-between align-items-center'>
        <Image className='logo ms-5 mt-1 mb2' src='../src/assets/header/logo.png'/>
        <div>
        <h1>Ganbare Store</h1>
        </div>
        <div className='longButton shadow p-3 mb-5 d-flex justify-content-center align-items-center'> 
              <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" className="heartbeat colorButton mb-1">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/account" className="heartbeat colorButton mb-1">Mi cuenta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cart"><span className="heartbeat colorButton mb-1 material-symbols-outlined">
shopping_cart
</span></Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
      </Container>
      <Container fluid className='subtitle w-100 h-20 d-flex justify-content-between align-items-center'>
      <div>
        <h2 className="animated-text">15% de Descuento con el código #DREAMTEAMG27</h2>
      </div>
      </Container>  
    </>
  )
}

export default Header