import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Image } from "react-bootstrap";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import "./Registration.css";
import validator from "validator";
import { createUser, getCities } from "../../services/api";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cities, setCities] = useState([])

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const user = {
      userEmail: values.userEmail,
      userPhone: values.userPhone,
      userRut: values.userRut,
      password: values.password,
      userAddress: values.userAddress,
      city_id: values.city_id,
      profile_id: 2,
    };

    try {
      const res = await createUser(user);
      console.log("data del user a la db: ", res);
      resetForm();
    } catch (err) {
      console.log("error createUser: ", err);
    }

    //localStorage.setItem("user", JSON.stringify(user));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    resetForm();
    setSubmitting(false);
  };

  useEffect(() => {
    getCities().then((res) => {
      setCities(res);
      console.log(res);
    });
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};

    const isRequired = (value) => (value ? undefined : 'Campo requerido');
    const maxLength = (max) => (value) => value && value.length > max ? `Máximo ${max} caracteres` : undefined;
    const isValidEmail = (value) => value && !validator.isEmail(value) ? 'Correo electrónico inválido' : undefined;

    const validateFields = {
      userEmail: [isRequired, isValidEmail],
      userPhone: [isRequired],
      userRut: [isRequired, maxLength(12)],
      password: [isRequired],
      password2: [isRequired],
      userAddress: [isRequired],
      city_id: [isRequired],
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
            userEmail: "",
            userPhone: "",
            userRut: "",
            password: "",
            password2: "",
            userAddress: "",
            city_id: "",
            profile_id: "",
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <ErrorMessage
              name="userEmail"
              component="div"
              className="text-danger"
            />
            <Field
              type="email"
              name="userEmail"
              placeholder="Correo electrónico"
              className="mb-3 form-control"
            />

            <ErrorMessage
              name="userPhone"
              component="div"
              className="text-danger"
            />
            <Field
              type="text"
              name="userPhone"
              placeholder="Teléfono"
              className="mb-3 form-control"
            />

            <ErrorMessage name="userRut" component="div" className="text-danger" />
            <Field
              type="text"
              name="userRut"
              placeholder="Rut"
              className="mb-3 form-control"
            />

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
              name="userAddress"
              component="div"
              className="text-danger"
            />
            <Field
              type="text"
              name="userAddress"
              placeholder="Dirección"
              className="mb-3 form-control"
            />
            <ErrorMessage name="city_id" component="div" className="text-danger" />
            <Field as="select" name="city_id" className="form-select mb-3">
              <option value="" disabled>
                Seleccione ciudad
              </option>
              {cities?.map((city) => {
                return (
                  <option key={city.city_id} value={city.city_id}>
                    {city.cityname}
                  </option>
                )
              })}
            </Field>

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
