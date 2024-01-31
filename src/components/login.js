import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./reglog.css"

function HorizontalExample() {

  return (
   
    <div className="Login">
      <h1>Вход в личный кабинет</h1>
    
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Логин
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Электронная почта" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Пароль
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Пароль" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Запомнить меня" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Войти</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  );
}

export default HorizontalExample;