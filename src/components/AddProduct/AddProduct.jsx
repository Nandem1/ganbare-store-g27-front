import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './AddProduct.css'
import { Image, Row, Col } from 'react-bootstrap';

function AddProduct() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido.'),
    category: Yup.string().required('Categoria inválida.'),
    price: Yup.number().required('El precio es requerido.'),
    description: Yup.string().required('La descripcion es requerida.'),
    quantity: Yup.number().required('La cantidad es requerida.')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(values);

    // alertas kawais
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado!',
      text: 'El producto se ha agregado exitosamente.',
    });

    // reset
    setSubmitting(false);
    navigate('/')
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', category: '', price: '', description: '', quantity: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='border d-flex p-5 form-box m-auto mt-5 justify-content-between  shadow flex-wrap'>
            <Row className='w-50'>
              <Col xs={{ order: 'last' }}>
                <div className=''>
                  <div className='mb-2'>
                    <label className='form-label' htmlFor="name">Nombre del producto:</label>
                    <Field className='form-control' type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="category">Categoria:</label>
                    <Field className='form-select' as='select' type="category" id="category" name="category">
                      <option value="">Selecciona una categoria</option>
                      <option value="Consolas">Consolas</option>
                      <option value="Videojuegos">Videojuegos</option>
                      <option value="Nintendo">Nintendo</option>
                    </Field>
                    <ErrorMessage name="category" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="price">Precio:</label>
                    <Field className='form-control' type="price" id="price" name="price" />
                    <ErrorMessage name="price" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="description">Descripcion:</label>
                    <Field className='form-control' as="textarea" id="description" name="description" />
                    <ErrorMessage name="description" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="quantity">Cantidad:</label>
                    <Field className='form-control' type="quantity" id="quantity" name="quantity" />
                    <ErrorMessage name="quantity" component="div" className="error text-danger" />
                  </div>

                    <button className='publicar-button mt-3 px-4 py-2' type="submit" disabled={isSubmitting}>
                      Publicar
                    </button>
                </div>
              </Col>
            </Row>
            <Row>
   <Col className='m-auto' xs={{ order: 'first' }} md={{ order: 'last'}} lg={{ order: 'last'}}>
   <div className='d-flex justify-content-center align-items-center'>
     <Image className='m-auto border rounded' src='../src/assets/homepage/nintendoswitchdocked.png' />
   </div>
 </Col>
 </Row>
          </Form>







        )}
      </Formik>
    </div>
  )
}

export default AddProduct