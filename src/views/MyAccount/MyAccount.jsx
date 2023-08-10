import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext} from 'react';
import AddProduct from '../../components/AddProduct/AddProduct';
import Nav from '../../components/nav/Nav';
import Profile from '../../components/profile/Profile'
import FavsCard from '../../components/Fav/Fav';

const MyAccount = () => {
    const { user } = useContext(AuthContext);
    const [selectedComponent, setSelectedComponent] = useState('misDatos');

    const handleNavOptionClick = (option) => {
        setSelectedComponent(option);
      };

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Container  className="d-flex justify-content-center">
            <Nav onOptionClick={handleNavOptionClick}/>
            {selectedComponent === "misDatos" && <Profile />}
            {selectedComponent === "favoritos" && <FavsCard />}
            </Container>
            {(user.userRol === 1)?<AddProduct className="w-100"/>:null}
        </>
    );
};

export default MyAccount;
