import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Fav.css"

const FavsCard = () => {
  const { user, setUser} = useContext(AuthContext);

  return (
    <Container className="d-flex ms-3 mt-4 border-0 rounded">
      <Card className="border-0 shadow w-100">
        <Card.Body>
          <Card.Title>Mis Favoritos</Card.Title>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default FavsCard;
