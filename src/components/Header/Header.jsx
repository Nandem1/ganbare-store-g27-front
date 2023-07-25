import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import NavLoggin from '../NavLoggin/NavLoggin'
import './Header.css'
import NavPublic from '../NavPublic/NavPublic';

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Container fluid className='header-bg w-100 h-50 d-flex justify-content-between align-items-center'>
        <Image className='logo ms-5 mt-1 mb2 me-0' src='../src/assets/header/logo.png'/>
        <div>
        <h1 className="ms-0">Ganbare Store</h1>
        </div>
        {(user)?<NavLoggin />:<NavPublic />}
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