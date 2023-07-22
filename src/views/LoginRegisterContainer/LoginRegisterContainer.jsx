import { Container } from "react-bootstrap";
import Login from '../../components/login/Login'
import Register from '../../components/Registration/Registration'

const LoginRegisterContainer = () => {
    return (
        <Container fluid className="d-flex justify-content-around ">
            <Login />
            <Register />
        </Container>
    )
}

export default LoginRegisterContainer;