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
        <Image className='logo ms-3 mt-1 mb-2 me-1' src='/src/assets/header/logo.png'/>
        <div>
        <h1 className="ms-1">Ganbare Store</h1>
        </div>
        {(user)?<div className="d-flex justify-items-end align-content-end"><NavLoggin /></div >:<div className="d-flex justify-items-end"><NavPublic /></div>}
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