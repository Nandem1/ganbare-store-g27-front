import { React, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './MyCart.css'

function MyCart() {
  const { cart, setCart } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const convertStringToNumber = (str) => {
    const numberStr = str.replace(/\$|,|\./g, '');
    return parseInt(numberStr);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + convertStringToNumber(numberFormat.format(item.price)) * item.cantidad, 0);
  };

  const calculateDiscount = (subtotal) => {
    return subtotal * 0.05;
  };

  const calculateTotal = (subtotal, discount) => {
    return subtotal - discount;
  };

  const handlePagarClick = () => {
    setShowModal(true);
  };

  const handleCancelarClick = () => {
    setShowModal(false);
  };

  const handlePagoClick = (opcion) => {
    setShowModal(false);
    Swal.fire({
      icon: 'success',
      title: 'Gracias por su compra',
      text: `Ha seleccionado ${opcion}`,
    });
  };

  const numberFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0, // Establecer el número máximo de decimales
    minimumFractionDigits: 0, // Establecer el número mínimo de decimales
  });

  return (
    <div>
      <Container>
        <h2 className='text-center mt-4'>Mi Carro</h2>
        <Row className='cart-box shadow mt-4'>
          <Col lg={8} md={8} className='mt-4'>
            <div className='bg-light border shadow py-3 d-flex flex-column align-items-center'>
              <div className='d-flex justify-content-between w-100 px-3 border-bottom mb-3'>
                <h5 className='fw-normal'>Producto</h5>
                <h5 className='fw-normal'>Precio</h5>
                <h5 className='fw-normal'>Cantidad</h5>
                <h5 className='fw-normal'>Subtotal</h5>
              </div>
              {cart.map(product => (
                <div key={product.product_id} className='d-flex justify-content-between w-100 px-3 align-items-center'>
                  <Image className='m-0 p-0 cart-img-product' src={product.image} />
                  <p className='me-5'>{numberFormat.format(product.price)}</p>
                  <p>{product.cantidad}</p>
                  <p>${(convertStringToNumber(numberFormat.format(product.price)) * product.cantidad).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col className='my-4 ms-3 me-3 border p-3 bg-light shadow'>
            <h2>RESUMEN DEL PEDIDO</h2>
            <div>
              <div>
                <p className='m-0 d-flex justify-content-between align-items-center'><span>SUBTOTAL</span><span>${calculateSubtotal().toLocaleString()}</span></p>
                <p className='m-0 d-flex justify-content-between align-items-center'><span>ENVIO</span><span>$0</span></p>
                <p className='d-flex justify-content-between align-items-center'><span>DESCUENTOS</span><span>{calculateDiscount(calculateSubtotal()).toLocaleString()}</span></p>
                <p className='d-flex justify-content-between align-items-center'><strong>TOTAL</strong><strong>${calculateTotal(calculateSubtotal(), calculateDiscount(calculateSubtotal())).toLocaleString()}</strong></p>
              </div>
            </div>
          </Col>
          <Button variant='dark' onClick={handlePagarClick}>Ir a pagar</Button>
        </Row>
      </Container>


      {/* Modal para mostrar las opciones de pago */}
      <Modal show={showModal} onHide={handleCancelarClick}>
        <Modal.Header closeButton>
          <Modal.Title>Opciones de pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant='secondary' onClick={() => handlePagoClick('Mercado Pago')}>Mercado Pago</Button>{' '}
          <Button variant='secondary' onClick={() => handlePagoClick('OnePay')}>OnePay</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleCancelarClick}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyCart