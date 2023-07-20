import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './compras.css'

function Compras() {
    return (
      <>
      <Container> 
      <Row>
        <Col className="bg-compras">
            <h3 className="Purchase-title mt-3">Mi cuenta</h3>
            <Image className="img-profile" src="../../assets/compras/profile.png" roundedCircle />
        </Col>
        <Col>2 of 2</Col>
      </Row>
        </Container>
      </>
    )
  }
  
  export default Compras