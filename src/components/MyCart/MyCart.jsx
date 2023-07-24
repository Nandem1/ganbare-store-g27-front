import { React, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './MyCart.css'

function MyCart() {
  const { products } = useContext(AuthContext)

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
              <div className='d-flex justify-content-between w-100 px-3 align-items-center'>
                <Image className='m-0 p-0 cart-img-product' src={products[0]?.img} />
                <p className='me-5'>$49.990</p>
                <p>1</p>
                <p>$49.990</p>
              </div>
            </div>
          </Col>
          <Col className='my-4 ms-3 me-3 border p-3 bg-light shadow'>
            <h2>RESUMEN DEL PEDIDO</h2>
            <div>
              <div>
                <p className='m-0 d-flex justify-content-between align-items-center'><span>SUBTOTAL</span><span>$49.990</span></p>
                <p className='m-0 d-flex justify-content-between align-items-center'><span>ENVIO</span><span>$0</span></p>
                <p className='d-flex justify-content-between align-items-center'><span>DESCUENTOS</span><span>-$4.000</span></p>
                <p className='d-flex justify-content-between align-items-center'><strong>TOTAL</strong><strong>$45.990</strong></p>
              </div>
            </div>
          </Col>
          <Button variant='dark'>Ir a pagar</Button>
        </Row>
      </Container>
    </div>
  )
}

export default MyCart