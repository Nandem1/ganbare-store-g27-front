import {RiLoginBoxFill} from 'react-icons/ri';
import Nav from 'react-bootstrap/Nav';
import './NavPublic.css'
import {Link} from 'react-router-dom';

const NavPublic = () => {
    return(
            <div className='p-3 mb-5 d-flex justify-content-center align-items-center'>
                <Nav justify>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/loginRegister" className='colorButton'><RiLoginBoxFill size={40} color='#8288c9'  />Iniciar sesión</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    );
};

export default NavPublic;