import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Row>
      <Col xs={12} md={12}>
        {children}
      </Col>
    </Row>
  );
};

export default FormContainer;
