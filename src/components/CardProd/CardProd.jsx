import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function CardProd(product) {
    const { cart, setCart, productsNumberInCart, user, handleToggleFav, isProductFavorited } = useContext(AuthContext)
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


  return (
            <Card className='card-container m-auto shadow' style={{width:150}}>
              <Card.Img className='card-image' variant="top" src={product.image} />
              <Card.Body>
                <Card.Text className='my-1'>{numberFormat.format(product.price)} <span className='text-decoration-line-through opacity-50'>{calcularPrecioSinOferta(numberFormat.format(product.price))}</span></Card.Text>
                <Card.Title className='m-0'>{product.productname}</Card.Title>
                <Card.Text className='m-0'>En stock: {product.stock}</Card.Text>
                <Card.Text className='my-2'>{product.description}</Card.Text>
                <div className='button-cards mb-3 d-flex'>
                  <Button className='button-add-cart' onClick={user ? () => handleAddCart(product) : handleNavigateLoginRegister}>Agregar al carro</Button>
                  <button onClick={user ? () => handleToggleFav(product.product_id) : handleNavigateLoginRegister} className='like-button bg-light d-flex align-items-center'>{isProductFavorited(product.product_id) ? <FaHeart className='text-danger'/> : <FaRegHeart />}</button>
                </div>
              </Card.Body>
            </Card>
        )
}

export default CardProd;