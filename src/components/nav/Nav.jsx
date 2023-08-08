import { Card, Accordion, ListGroup, Image } from 'react-bootstrap';
import {useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const { user } = useContext(AuthContext);
    return (
      <Card style={{ width: '25%' }}  className='mt-4 d-flex border-0 shadow'>
        <Card.Body className="p-1">
          <Card.Title className='fs-2 font-weight-bold m-2'>Mi cuenta</Card.Title>
          <Card.Text className='d-flex align-items-center gap-3 flex-column justify-items-center'>
            <Image src='https://cdn.myanimelist.net/images/characters/15/262053.jpg' className="profileImage" roundedCircle/>
            <p className="h5">Hola, <strong><h6>{user.userEmail}</h6></strong></p>
          </Card.Text>
          <Accordion className="custom-accordion">
            <Accordion.Item eventKey="0" className="custom-accordion-item border-0 border-bottom">
              <Accordion.Header className='item'>Mi Perfil</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item className='border-0 item' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/mi-perfil/datos-personales">Datos personales</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0 item' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/mi-perfil/cambio-contraseña">Cambio de contraseña</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0 item' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/mi-perfil/direccion">Dirección</Link>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="custom-accordion-item border-0 border-bottom">
              <Accordion.Header className='item'>Mis Compras</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item className='border-0' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/mis-compras/seguimiento">Seguimiento de compras</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/mis-compras/historial">Historial de compras</Link>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="custom-accordion-item border-0">
              <Accordion.Header className='item'>Tarjetas y cuentas</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item className='border-0 item' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/tarjetas-cuentas/tarjetas-guardadas">Tarjetas guardadas</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className='border-0 item' style={{ backgroundColor: '#faf9f9'}}>
                    <Link to="/tarjetas-cuentas/cuenta-reembolso">Cuenta para reembolso</Link>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    );
  };

  export default Nav;
