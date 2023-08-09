import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Profile.css"

const EditProfileCard = () => {
  const { user, setUser} = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    formEmail: Yup.string().email('Email inválido').required('Email es requerido'),
    formRut: Yup.string().required('RUT es requerido'),
    formPhone: Yup.string().required('Teléfono es requerido'),
    formAddress: Yup.string().required('Dirección es requerida'),
    formCity: Yup.string().required('Ciudad es requerida'),
    formRegion: Yup.string().required('Región es requerida'),
  });

  const handleSubmit = (values, {resetForm}) => {
    if (user){
      const updatedUser = {
        ...user,
        formEmail: values.formEmail,
        formRut: values.formRut,
        formPhone: values.formPhone,
        formAddress: values.formAddress,
        formCity: values.formCity
      };
      setUser(updatedUser);
      localStorage.removeItem(user);
      localStorage.setItem(user, JSON.stringify(updatedUser));
      setIsFormSubmitted(true);
      setIsEditing(false)
    }

    resetForm();
    }

    if (!user) {
      return <div>Loading...</div>;
  }

  return (
    <Container className="d-flex ms-3 mt-4 border-0 rounded">
      <Card className="border-0 shadow w-100">
        <Card.Body>
          <Card.Title>Mi Perfil</Card.Title>
          <Formik
            initialValues={{
              formEmail: user.userEmail,
              formRut: user.userRut,
              formPhone: user.userPhone,
              formAddress: user.userAddress,
              formCity: user.userCity
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, submitForm }) => (
              <Form className="d-flex flex-wrap" onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="w-100">
                  <Form.Label>Email</Form.Label>
                  <Field type="email" name="formEmail" placeholder="Enter email" as={Form.Control} disabled={!isEditing} />
                  <ErrorMessage name="formEmail" component="div" className="text-danger" />
                </Form.Group>

                <Form.Group controlId="formRut" className="w-50 mt-2 pe-2">
                  <Form.Label>RUT</Form.Label>
                  <Field type="text" name="formRut" placeholder="Enter RUT" as={Form.Control} disabled={!isEditing} />
                  <ErrorMessage name="formRut" component="div" className="text-danger" />
                </Form.Group>

                <Form.Group controlId="formPhone" className="w-50 mt-2">
                  <Form.Label>Teléfono</Form.Label>
                  <Field type="text" name="formPhone" placeholder="Enter phone number" as={Form.Control} disabled={!isEditing} />
                  <ErrorMessage name="formPhone" component="div" className="text-danger" />
                </Form.Group>

                <div className="d-flex w-100 gap-2 mt-2 justify-content-around">
                  <Form.Group controlId="formAddress" className="custom-width">
                    <Form.Label>Dirección</Form.Label>
                    <Field type="text" name="formAddress" placeholder="Enter address" as={Form.Control} disabled={!isEditing} />
                    <ErrorMessage name="formAddress" component="div" className="text-danger" />
                  </Form.Group>

                  <Form.Group controlId="formCity" className="custom-width">
                    <Form.Label>Ciudad</Form.Label>
                    <Field type="text" name="formCity" placeholder="Enter city" as={Form.Control} disabled={!isEditing} />
                    <ErrorMessage name="formCity" component="div" className="text-danger" />
                  </Form.Group>
                </div>

                {isEditing ? (
                  <Button variant="primary" type="button" className="mt-5 buttonCustom" onClick={()=> {
                    setIsEditing(false);
                    submitForm()
                  }}>
                    Guardar información
                  </Button>
                ):(
                  <Button variant="primary" className="mt-5 buttonCustom" onClick={() => setIsEditing(true)}>
                    Editar perfil
                  </Button>
                )}
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditProfileCard;
