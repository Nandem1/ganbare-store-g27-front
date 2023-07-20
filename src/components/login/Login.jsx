import { useEffect, useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });
    const [variant, setVariant] = useState("secondary");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        alert("estoy funcionando");
        // Realizar la lógica de envío del formulario
      };

      const isFormValid = Object.values(formData).every((value) => value !== '');
    useEffect(() => {
        setVariant(isFormValid?'primary':'secondary');
    },[formData]);

    return (
        <Card style={{ width: '30%' }} className="mt-3 cardStyle shadow shadow-left border border-0">
          <Card.Body>
            <div className='image-container d-flex justify-content-center align-items-center'>
                <Image
                    src="/images/logo.png"
                    alt="logo tienda"
                    width="30%"
                />
            </div>
            <Card.Title className='text-center mb-3 fs-1'>Bienvenido</Card.Title>
            <Card.Text className='text-center mb-3'>Ingresa a tu cuenta para continuar</Card.Text>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="login">
                    <Form.Control
                        type="email"
                        placeholder="Direccion de correo"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mb-4"
                        required
                    />
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mb-4"
                        required
                    />
                    <Button
                        disabled={!isFormValid}
                        className={`w-100 ${variant}`}
                        type="submit"
                    >
                        Ingresar
                    </Button>
                </Form.Group>
            </Form>
          </Card.Body>
          <Card.Body className='border-top'>
            <Card.Text className='text-center'>Puedes iniciar sesión con</Card.Text>
            <Button
            className={`w-100 mb-3`}
            type="submit">
                <Image
                src='/images/google.png'
                width='10%'
                className='me-3'
                />
                Continuar con Google
            </Button>
            <Button
            className={`w-100`}
            type="submit">
                <Image
                src='/images/Facebook-logo.png'
                width='10%'
                className='me-3'
                />
                Continuar con Google
            </Button>
          </Card.Body>
        </Card>
    );
}

export default Login;