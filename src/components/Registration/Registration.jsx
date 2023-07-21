import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Image } from 'react-bootstrap';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import './Registration.css';
import validator from 'validator';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const user = {
      email: values.email,
      phone: values.phone,
      rut: values.rut,
      password: values.password,
      address: values.address,
      region: values.region,
      city: values.city,
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    resetForm();
    setSubmitting(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Campo requerido';
    }

    if (!values.email) {
      errors.email = 'Campo requerido';
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Correo electrónico inválido';
    }

    if (!values.phone) {
      errors.phone = 'Campo requerido';
    }

    if (!values.rut) {
      errors.rut = 'Campo requerido';
    } else if (values.rut.length > 12) {
      errors.rut = 'Máximo 10 caracteres';
    }

    if (!values.password) {
      errors.password = 'Campo requerido';
    }

    if (!values.password2) {
      errors.password2 = 'Campo requerido';
    }

    if (!values.address) {
      errors.address = 'Campo requerido';
    }

    if (!values.region) {
      errors.region = 'Campo requerido';
    }

    if (!values.city) {
      errors.city = 'Campo requerido';
    }

    return errors;
  };

  return (
    <Card style={{ width: '30%' }} className="mt-3 cardStyle shadow shadow-left border border-0">
      <Card.Body>
        <Image src="/images/logo.png" alt="logo tienda" width="20%" />
        <Card.Title className='text-center mb-3'>Crea tu cuenta en Ganbare Store</Card.Title>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            rut: '',
            password: '',
            password2: '',
            address: '',
            region: '',
            city: '',
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="name" placeholder="Nombre y Apellido" className="mb-3 form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />

            <Field type="email" name="email" placeholder="Correo electrónico" className="mb-3 form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />

            <Field type="text" name="phone" placeholder="Teléfono" className="mb-3 form-control" />
            <ErrorMessage name="phone" component="div" className="text-danger" />

            <Field type="text" name="rut" placeholder="Rut" className="mb-3 form-control" />
            <ErrorMessage name="rut" component="div" className="text-danger" />

            <div className="password-field d-flex align-content-center">
              <Field type={showPassword ? 'text' : 'password'} name="password" placeholder="Contraseña" className="mb-3 form-control" />
              <span className="password-toggle-icon" onClick={handleShowPassword}>
                {!showPassword ? <AiFillLock className="icon-size icon-color"/> : <AiFillUnlock className="icon-size icon-color" />}
              </span>
            </div>
            <ErrorMessage name="password" component="div" className="text-danger" />

            <div className="password-field d-flex align-content-center">
              <Field type={showPassword ? 'text' : 'password'} name="password2" placeholder="Reingrese su contraseña" className="mb-3 form-control" />
              <span className="password-toggle-icon" onClick={handleShowPassword}>
                {!showPassword ? <AiFillLock className="icon-size icon-color"/> : <AiFillUnlock className="icon-size icon-color"/>}
              </span>
            </div>
            <ErrorMessage name="password2" component="div" className="text-danger" />

            <Field type="text" name="address" placeholder="Dirección" className="mb-3 form-control" />
            <ErrorMessage name="address" component="div" className="text-danger" />

            <Field type="select" name="region" placeholder="Región" className="mb-3 form-control" />
            <ErrorMessage name="region" component="div" className="text-danger" />

            <Field type="select" name="city" placeholder="Ciudad" className="mb-3 form-control" />
            <ErrorMessage name="city" component="div" className="text-danger" />

            <Button type="submit" className="w-100 primary">
              Crear cuenta
            </Button>
          </Form>
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default Registration;
