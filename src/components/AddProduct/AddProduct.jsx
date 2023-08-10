import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './AddProduct.css'
import { Image, Row, Col } from 'react-bootstrap';
import { crearProducto } from '../../services/api';

function AddProduct() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    productname: Yup.string().required('El nombre es requerido.'),
    image: Yup.string().required('La imagen es requerida.'),
    category_id: Yup.string().required('Categoria inválida.'),
    price: Yup.number().required('El precio es requerido.'),
    garantia: Yup.string().required('La garantia es requerida.'),
    description: Yup.string().required('La descripcion es requerida.'),
    stock: Yup.number().required('La cantidad es requerida.')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const product = await crearProducto(values)
    console.log("Values en crear producto: ", values);
    console.log("product en crear producto: ", product)

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
        initialValues={{ productname: '', category_id: '', price: '', description: '', stock: '', garantia: '', image: '', }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className='border d-flex p-5 form-box m-auto mt-5 justify-content-between  shadow flex-wrap'>
            <Row className='w-50'>
              <Col xs={{ order: 'last' }}>
                <div className=''>
                  <div className='mb-2'>
                    <label className='form-label' htmlFor="productname">Nombre del producto:</label>
                    <Field className='form-control' type="text" id="productname" name="productname" />
                    <ErrorMessage name="productname" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="image">Imagen:</label>
                    <Field className='form-control' type="text" id="image" name="image" />
                    <ErrorMessage name="image" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="category_id">Categoria:</label>
                    <Field className='form-select' as='select' type="category_id" id="category_id" name="category_id">
                      <option value="">Selecciona una categoria</option>
                      <option value="1">Consolas</option>
                      <option value="2">Videojuegos</option>
                      <option value="3">Figuras</option>
                      <option value="4">Ropa</option>
                      <option value="5">Mangas</option>
                    </Field>
                    <ErrorMessage name="category_id" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="price">Precio:</label>
                    <Field className='form-control' type="price" id="price" name="price" />
                    <ErrorMessage name="price" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="garantia">Garantia:</label>
                    <Field className='form-control' id="garantia" name="garantia" />
                    <ErrorMessage name="garantia" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="description">Descripcion:</label>
                    <Field className='form-control' as="textarea" id="description" name="description" />
                    <ErrorMessage name="description" component="div" className="error text-danger" />
                  </div>

                  <div className='mb-2'>
                    <label className='form-label' htmlFor="stock">Cantidad:</label>
                    <Field className='form-control' type="stock" id="stock" name="stock" />
                    <ErrorMessage name="stock" component="div" className="error text-danger" />
                  </div>

                  <button className='publicar-button mt-3 px-4 py-2' type="submit" disabled={isSubmitting}>
                    Publicar
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='m-auto' xs={{ order: 'first' }} md={{ order: 'last' }} lg={{ order: 'last' }}>
                <div className='d-flex justify-content-center align-items-center'>
                  <Image className='img-add-product m-auto border rounded' src={values.image ? values.image : '../src/assets/homepage/nintendoswitchdocked.png'} />
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