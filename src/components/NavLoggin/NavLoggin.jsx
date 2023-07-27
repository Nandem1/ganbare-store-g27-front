import {Link} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Nav from 'react-bootstrap/Nav';
import './NavLoggin.css'

const NavLoggin = () => {
    const [productsInCart, setProductsInCart] = useState(0);
    const { cart, logout } = useContext(AuthContext);

    useEffect(() => {
        const totalProducts = cart.reduce((total, product) => total + product.cantidad, 0);
        setProductsInCart(totalProducts);
      }, [cart]);

    return(
            <div className='mb-5 d-flex justify-content-center align-items-center'>
                <Nav defaultActiveKey="/home" className='d-flex justify-content-center align-items-center'>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ganbare-store-g27-front" className="colorButton mb-1 me-1">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ganbare-store-g27-front/miCuenta" className="colorButton mb-1">Mi cuenta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/ganbare-store-g27-front" className="colorButton mb-1" onClick={logout}>Cerrar sesión</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ganbare-store-g27-front/miCarro"><span className="colorButton mb-1 p-3 material-symbols-outlined d-flex">shopping_cart<span className="fs-5">{productsInCart}</span></span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    );
};

export default NavLoggin;