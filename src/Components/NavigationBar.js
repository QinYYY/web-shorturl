import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigation = useNavigate()
  function login() {
    // LoginPage
    console.log('click');
    navigation('/LoginPage')


  }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img style={brandImg}
              src='./favicon.ico'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />Home</Navbar.Brand>
          <Nav className="me-auto" style={navFont}>
            <Nav.Link href="https://github.com/QinYYY" >Github</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button style={loginButton} onClick={login}>Login
              </Button>
              {/* Signed in as: <a href="#login">Mark Otto</a> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


// styles~~~~~~~~~~~~~~~~~~~~~~~~~~
const brandImg = {

  marginRight: 10

}

const navFont = {
  fontSize: 17,
  fontWeight: 'bolder',
}
const loginButton = {
  borderRadius: 10,

}



export default NavigationBar;