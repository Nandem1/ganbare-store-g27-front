import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Fav.css"
import CardProd from '../CardProd/CardProd';

const FavsCard = () => {
  const { user, setUser, favs, setFavs} = useContext(AuthContext);
  if (!favs) {
    return <div>Loading...</div>;
}
  console.log(favs);

  return (
    <Container className="d-flex ms-3 mt-4 border-0 rounded">
      <Card className="border-0 shadow w-100">
        <Card.Body>
          <Card.Title>Mis Favoritos</Card.Title>
            {
              favs?.map(product =>{
                console.log(product);
                return(
                  <CardProd product={product} key={product.product_id} />
                )
              })
            }
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FavsCard;
