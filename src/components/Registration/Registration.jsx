import { useEffect, useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone:'',
        rut:'',
        password:'',
        password2:'',
        address:'',
        region:'',
        city:''
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
            <Image
                src="/images/logo.png"
                alt="logo tienda"
                width="20%"
            />
            <Card.Title className='text-center mb-3'>Crea tu cuenta en Ganbare Store</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="register">
                    <Form.Control
                        type="text"
                        placeholder="Nombre y Apellido"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="text"
                        placeholder="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="text"
                        placeholder="Rut"
                        name="rut"
                        value={formData.rut}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="password"
                        placeholder="Reingrese su contraseña"
                        name="password2"
                        value={formData.password2}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="text"
                        placeholder="Dirección"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="select"
                        placeholder="Región"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Form.Control
                        type="select"
                        placeholder="Ciudad"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mb-3"
                        required
                    />
                    <Button
                        disabled={!isFormValid}
                        className={`w-100 ${variant}`}
                        type="submit"
                    >
                        Crear cuenta
                    </Button>
                </Form.Group>
            </Form>
          </Card.Body>
        </Card>
    );
}

export default Registration;