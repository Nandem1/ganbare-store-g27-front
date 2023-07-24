import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import './ItemCards.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

function ItemCards() {
  const { products } = useContext(AuthContext)
  const cuatroProductos = products.slice(0, 4)

  const calcularPrecioSinOferta = (precioData) => {
    const precioConOferta = precioData;
    const precioNumerico = parseInt(precioConOferta.replace(/\D/g, ''));
    const descuento = 39990;
    const nuevoPrecioSinOferta = precioNumerico + descuento;
    return nuevoPrecioSinOferta.toLocaleString() + '$';
  };

  if (products == []) {
    return <p>Cargando</p>
  }

  return (
    <Container>
      <Row lg={4} md={3} sm={1} xs={1} className='row-gap-4'>
        {cuatroProductos.map((item) => {
          return (
            <Col key={item.id}>
              <Card className='card-container m-auto shadow'>
                <Card.Img className='card-image' variant="top" src={item?.img} />
                <Card.Body>
                  <Card.Text className='my-1'>{item?.precio} <span className='text-decoration-line-through opacity-50'>{calcularPrecioSinOferta(item?.precio)}</span></Card.Text>
                  <Card.Title className='m-0'>{item?.nombre}</Card.Title>
                  <Card.Text className='m-0'>En stock: {item?.stock}</Card.Text>
                  <Card.Text className='my-2'>{item?.desc}</Card.Text>
                  <div className='button-cards mb-3 d-flex'>
                  <Button className='button-add-cart'>Agregar al carro</Button>
                  <button className='like-button bg-light d-flex align-items-center'><FaRegHeart /></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ItemCards