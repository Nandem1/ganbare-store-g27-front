import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import './ItemCards.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function ItemCards() {
  const { products, cart, setCart, productsNumberInCart, user } = useContext(AuthContext)
  const navigate = useNavigate();

  const calcularPrecioSinOferta = (precioData) => {
    const precioConOferta = precioData;
    const precioNumerico = parseInt(precioConOferta.replace(/\D/g, ''));
    const descuento = 10000;
    const nuevoPrecioSinOferta = precioNumerico + descuento;
    return '$' + nuevoPrecioSinOferta.toLocaleString();
  };

  const numberFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0, // Establecer el número máximo de decimales
    minimumFractionDigits: 0, // Establecer el número mínimo de decimales
  });

  if (products == []) {
    return <p>Cargando</p>
  }

  const handleNavigateLoginRegister = () => {
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
    }, 50);
  }

  const handleAddCart = (item) => {
    const existingProduct = cart.find((cartItem) => cartItem.product_id === item.product_id);

    if (existingProduct) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.product_id === item.product_id ? { ...cartItem, cantidad: cartItem.cantidad + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
    productsNumberInCart();
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Container>
      <Row lg={4} md={3} sm={1} xs={1} className='row-gap-4'>
        {products.map((item) => {
          return (
            <Col key={item.product_id}>
              <Card className='card-container m-auto shadow'>
                <Card.Img className='card-image' variant="top" src={item?.image} />
                <Card.Body>
                  <Card.Text className='my-1'>{numberFormat.format(item.price)} <span className='text-decoration-line-through opacity-50'>{calcularPrecioSinOferta(numberFormat.format(item.price))}</span></Card.Text>
                  <Card.Title className='m-0'>{item?.productname}</Card.Title>
                  <Card.Text className='m-0'>En stock: {item?.stock}</Card.Text>
                  <Card.Text className='my-2'>{item?.description}</Card.Text>
                  <div className='button-cards mb-3 d-flex'>
                    <Button className='button-add-cart' onClick={user ? () => handleAddCart(item) : handleNavigateLoginRegister}>Agregar al carro</Button>
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