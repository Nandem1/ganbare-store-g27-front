import { Container } from "react-bootstrap";
import Login from "../../components/login/Login";
import Registration from "../../components/Registration/Registration";

const LoginRegisterContainer = () => {
    return (
        <Container fluid className="d-flex justify-content-around ">
            <Registration />
            <Login />
        </Container>
    )
}

export default LoginRegisterContainer;