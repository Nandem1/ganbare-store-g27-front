import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SweetAlert from 'react-bootstrap-sweetalert';
import validator from 'validator';

const EditProfileCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  const initialValues = {
    email: user.email || '',
    phone: user.phone || '',
    rut: user.rut || '',
    password: user.password || '',
    address: user.address || '',
    region: user.region || ''
  };

  const handleValidation = (values) => {
    const errors = {};

    if (validator.isEmpty(values.name)) {
      errors.email = 'El mail es obligatorio';
      errors.phone = 'El telefono es obligatorio';
      errors.rut = 'El rut es obligatorio';
      errors.addres = 'La direccion es obligatoria';
      errors.region = 'La region es obligatoria';
    }

    return errors;
  };

  const handleEditData = () => {
    setIsEditing(true);
  };

  const handleConfirmData = (values) => {
   if (user.email !== )


    setIsEditing(false);
    SweetAlert('Datos actualizados con éxito', '', 'success');
  };

  const handleEditPassword = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePasswordModalSubmit = (values, { resetForm }) => {
    // Validar la contraseña ingresada y realizar el cambio de contraseña en el localStorage o enviarlo al servidor
    // ... Aquí deberías validar la contraseña actual y realizar el cambio de contraseña ...

    resetForm();
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            validate={handleValidation}
            onSubmit={handleConfirmData}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    disabled={!isEditing}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Agrega más campos del formulario aquí */}

                {!isEditing && (
                  <Button variant="primary" onClick={handleEditData}>
                    Editar Datos
                  </Button>
                )}
                {isEditing && (
                  <>
                    <Button variant="success" type="submit">
                      Confirmar Datos
                    </Button>
                    <Button variant="secondary" onClick={handleEditPassword}>
                      Editar Contraseña
                    </Button>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Modal para editar contraseña */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ currentPassword: '', newPassword: '', confirmPassword: '' }}
            validate={(values) => {
              const errors = {};

              if (validator.isEmpty(values.currentPassword)) {
                errors.currentPassword = 'Contraseña actual requerida';
              }

              if (validator.isEmpty(values.newPassword)) {
                errors.newPassword = 'Nueva contraseña requerida';
              }

              if (!validator.equals(values.newPassword, values.confirmPassword)) {
                errors.confirmPassword = 'Las contraseñas no coinciden';
              }

              return errors;
            }}
            onSubmit={handlePasswordModalSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Contraseña Actual
                  </label>
                  <Field
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="currentPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Agrega los campos para la nueva contraseña y su confirmación aquí */}
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    Nueva Contraseña
                  </label>
                  <Field
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Nueva Contraseña
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <Button variant="primary" type="submit">
                  Cambiar Contraseña
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfileCard;
