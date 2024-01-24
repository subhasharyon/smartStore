import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from './Login';
import Signup from './Signup';

function TopNavigation() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ isLoginView, setIsLoginView ] = useState(true);

  const toggleView = () => {
    setIsLoginView((prev) => !prev);
  }

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>SmartStore.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='button2' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <div className='icons'>
      <FontAwesomeIcon icon={faUser} onClick={handleShow}/>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{isLoginView ? 'Login' : 'Regiser'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLoginView ? <Login onRegisterClick={toggleView}/> : <Signup onLoginClick={toggleView}/>}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default TopNavigation