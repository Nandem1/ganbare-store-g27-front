import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Validator from 'validator';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Login.css';
import { useState } from 'react';

const Login = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (values) => {
    const login = {
      email: values.email,
      password: values.password
    }

    const user = JSON.parse(localStorage.getItem('user'));

    (user.email === login.email && user.password === login.password)?alert("bienvenido"):alert("usuario/contraseña incorrectos");
    setSuccess(true);
    console.log(success);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!Validator.isEmail(values.email)) {
      errors.email = 'Correo electrónico inválido';
    }

    if (Validator.isEmpty(values.password)) {
      errors.password = 'Contraseña requerida';
    }

    return errors;
  };

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
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Direccion de correo"
                  className="form-control mb-2"
                />
                <ErrorMessage name="email" component="div" className="text-danger mb-3" />

                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="text-danger mb-3" />

                <Button
                  type="submit"
                  className="w-100 mt-3"
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
      <Card.Body className='border-top'>
        <Card.Text className='text-center'>Puedes iniciar sesión con</Card.Text>
        <Button className={`w-100 mb-3`} type="submit">
          <Image
            src='/images/google.png'
            width='10%'
            className='me-3'
          />
          Continuar con Google
        </Button>
        <Button className={`w-100`} type="submit">
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
