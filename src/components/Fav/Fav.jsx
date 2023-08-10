import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Card, Form, Button, Container, Image } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Fav.css"
import { FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa'

const FavsCard = () => {
  const { cart, setCart, favs, handleToggleFav, isProductFavorited } = useContext(AuthContext);

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
    //productsNumberInCart();
  };

  console.log(favs)

  const numberFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0, // Establecer el número máximo de decimales
    minimumFractionDigits: 0, // Establecer el número mínimo de decimales
  });

  const calcularPrecioSinOferta = (precioData) => {
    const precioConOferta = precioData;
    const precioNumerico = parseInt(precioConOferta.replace(/\D/g, ''));
    const descuento = 10000;
    const nuevoPrecioSinOferta = precioNumerico + descuento;
    return '$' + nuevoPrecioSinOferta.toLocaleString();
  };

  return (
    <Container className="d-flex ms-3 mt-4 border-0 rounded">
      <Card className="border-0 shadow w-100">
        <Card.Body>
          <Card.Title>Mis Favoritos</Card.Title>
          {favs?.map((item) => {
            return (
              <div className='d-flex border my-2 shadow justify-content-between' key={item.product_id}>
                <div className='d-flex align-items-center'>
                  <Image className='favs-image' src={item.image}/>
                  <div>
                  <p className='product-name m-0 p-0'>{item.productname}</p>
                  <p className='product-name m-0 p-0'>{numberFormat.format(item.price)}<span className='ms-1 text-decoration-line-through opacity-50'>{calcularPrecioSinOferta(numberFormat.format(item.price))}</span></p>
                  </div>
                </div>
                <div className='d-flex align-items-center me-4'>
                  <div className='me-3 border border-3 rounded p-2 shopping-box'><FaShoppingCart className='fav-icons' onClick={() => handleAddCart(item)}/></div>
                  <div className='border border-3 rounded p-2 heart-box'>{isProductFavorited ? <FaHeart onClick={() => handleToggleFav(item.product_id)} className='fav-icons'/> : <FaRegHeart className='fav-icons' onClick={() => handleToggleFav(item.product_id)}/>}</div>
                </div>
              </div>
            )
          })}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FavsCard;
