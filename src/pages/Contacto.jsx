import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormDisabledExample() {
  return (
    <Container className="d-flex align-items-center" style={{ height: '80vh' }}>
      <Row className="justify-content-center mx-auto">
        <Col md={8} lg={12}>
          <Card className="bg-primary mt-4 mb-4 text-center" style={{ maxWidth: '600px' }}>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput" className="text-white">Nombre</Form.Label>
                  <Form.Control id="disabledTextInput" placeholder="Escribe tu nombre"  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledEmailInput" className="text-white">Email</Form.Label>
                  <Form.Control id="disabledEmailInput" type="email" placeholder="Ejemplo@hotmail.com.ar"  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message" className="text-white">Mensaje</Form.Label>
                  <Form.Control as="textarea" id="message" rows={3} placeholder="Escribe tu mensaje . . ."  />
                </Form.Group>
                <Button type="submit" className="btn-dark">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FormDisabledExample;
