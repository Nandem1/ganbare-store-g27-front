import { Container } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext} from 'react';
import AddProduct from '../../components/AddProduct/AddProduct';
import Nav from '../../components/nav/Nav';
import Profile from '../../components/profile/Profile'

const MyAccount = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Container  className="d-flex justify-content-center">
            <Nav />
            <Profile />
            </Container>
            {(user.userRol === 1)?<AddProduct className="w-100"/>:null}
        </>
    );
};

export default MyAccount;
