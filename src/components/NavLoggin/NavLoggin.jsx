import Nav from 'react-bootstrap/Nav';
import './NavLoggin.css'

const NavLoggin = () => {
    return(
            <div className='longButton shadow p-3 mb-5 d-flex justify-content-center align-items-center'>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className="heartbeat colorButton mb-1">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/account" className="heartbeat colorButton mb-1">Mi cuenta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/cart"><span className="heartbeat colorButton mb-1 material-symbols-outlined">shopping_cart</span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    );
};

export default NavLoggin;