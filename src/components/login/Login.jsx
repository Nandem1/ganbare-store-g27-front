import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Validator from 'validator';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import Card from 'react-bootstrap/Card';
import SweetAlertMessage from '../sweetAlertMessage/SweetAlertMessage';
import './Login.css';

const Login = () => {
  const { login, setSuccess, errorType } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleSubmit = (values) => {
    const isLoggedIn = login({
      email: values.email,
      password: values.password,
    });
    const userData = JSON.parse(localStorage.getItem('user'));
    if(isLoggedIn)navigate("/miCuenta");

    // if (isLoggedIn) {
      // setSuccess(true);
      // navigate(path);
    // } else {
      // setSuccess(false);
    // }
  };

  return (
    <>
      {errorType && <SweetAlertMessage errorType={errorType} />}
      <Card style={{ width: '30%', height: '40%' }} className="mt-3 cardStyle shadow shadow-left border border-0">
        <Card.Body>
          <div className='image-container d-flex justify-content-center align-items-center'>
            <Image
              src="/images/logo.png"
              alt="logo tienda"
              className="logoLogin"
            />
          </div>
          <Card.Title className='text-center mb-3 fs-1'>Bienvenido</Card.Title>
          <Card.Text className='text-center mb-3'>Ingresa a tu cuenta para continuar</Card.Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
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
                  className="w-100 mt-3 primary"
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
        <Card.Body className='border-top'>
          <Card.Text className='text-center'>Puedes iniciar sesión con</Card.Text>
          <Button className="w-100 mb-3 primary m-0 p-0 buttonRedesSociales" type="submit">
            <Image
              src='/images/google.png'
              className='logoRedesSociales'
            />
            Continuar con Google
          </Button>
          <Button className="w-100 mb-3 primary m-0 p-0 buttonRedesSociales" type="submit">
            <Image
              src='/images/Facebook-logo.png'
              className='logoRedesSociales'
            />
            Continuar con Facebook
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
