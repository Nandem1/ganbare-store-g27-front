import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Image } from "react-bootstrap";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import "./Registration.css";
import validator from "validator";

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
      userType: values.userType,
    };
    
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    resetForm();
    setSubmitting(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};
  
    const isRequired = (value) => (value ? undefined : 'Campo requerido');
    const maxLength = (max) => (value) => value && value.length > max ? `Máximo ${max} caracteres` : undefined;
    const isValidEmail = (value) => value && !validator.isEmail(value) ? 'Correo electrónico inválido' : undefined;
  
    const validateFields = {
      name: [isRequired],
      email: [isRequired, isValidEmail],
      phone: [isRequired],
      rut: [isRequired, maxLength(12)],
      password: [isRequired],
      password2: [isRequired],
      address: [isRequired],
      region: [isRequired],
      city: [isRequired],
    };
  
    for (const field in validateFields) {
      const fieldValidators = validateFields[field];
      for (const validatorFn of fieldValidators) {
        const error = validatorFn(values[field]);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    }
  
    return errors;
  };
  

  return (
    <Card
      style={{ width: "30%" }}
      className="mt-3 cardStyle shadow shadow-left border border-0"
    >
      <Card.Body>
        <Image
          src="https://raw.githubusercontent.com/Nandem1/ganbare-store-g27-front/main/public/images/logo.png"
          alt="logo tienda"
          className="logoRegister"
        />
        <Card.Title className="text-center mb-3">
          Crea tu cuenta en Ganbare Store
        </Card.Title>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            rut: "",
            password: "",
            password2: "",
            address: "",
            region: "",
            city: "",
            userType: "",
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <ErrorMessage name="name" component="div" className="text-danger" />
            <Field
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className="mb-3 form-control"
            />

            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
            <Field
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="mb-3 form-control"
            />

            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger"
            />
            <Field
              type="text"
              name="phone"
              placeholder="Teléfono"
              className="mb-3 form-control"
            />

            <ErrorMessage name="rut" component="div" className="text-danger" />
            <Field
              type="text"
              name="rut"
              placeholder="Rut"
              className="mb-3 form-control"
            />

            <ErrorMessage
              name="userType"
              component="div"
              className="text-danger"
            />
            <Field as="select" name="userType" className="form-select mb-3">
              <option value="" disabled>
                Seleccione tipo de usuario
              </option>
              <option value="comprador">Comprador</option>
              <option value="administrador">Administrador</option>
            </Field>

            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
            <div className="password-field d-flex align-content-center">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                className="mb-3 form-control"
              />
              <span
                className="password-toggle-icon"
                onClick={handleShowPassword}
              >
                {!showPassword ? (
                  <AiFillLock className="icon-size icon-color" />
                ) : (
                  <AiFillUnlock className="icon-size icon-color" />
                )}
              </span>
            </div>

            <ErrorMessage
              name="password2"
              component="div"
              className="text-danger"
            />
            <div className="password-field d-flex align-content-center">
              <Field
                type={showPassword ? "text" : "password"}
                name="password2"
                placeholder="Reingrese su contraseña"
                className="mb-3 form-control"
              />
              <span
                className="password-toggle-icon"
                onClick={handleShowPassword}
              >
                {!showPassword ? (
                  <AiFillLock className="icon-size icon-color" />
                ) : (
                  <AiFillUnlock className="icon-size icon-color" />
                )}
              </span>
            </div>

            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
            <Field
              type="text"
              name="address"
              placeholder="Dirección"
              className="mb-3 form-control"
            />

            <ErrorMessage
              name="region"
              component="div"
              className="text-danger"
            />
            <Field
              type="select"
              name="region"
              placeholder="Región"
              className="mb-3 form-control"
            />

            <ErrorMessage name="city" component="div" className="text-danger" />
            <Field
              type="select"
              name="city"
              placeholder="Ciudad"
              className="mb-3 form-control"
            />

            <Button type="submit" className="w-100 primary">
              Crear cuenta
            </Button>
          </Form>
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default Registration;
