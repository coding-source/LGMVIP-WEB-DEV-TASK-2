import React, { useEffect } from "react";
import { Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import {User} from './components/User.js'
import { render } from '@testing-library/react';

function App() {
  const getApiData = () => {
    render(<User />);
  }
  useEffect(() => {
    document.title = "DataFetcher";
  }, []);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">Web dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">HOME</Nav.Link>
              <Nav.Link href="">CONTACT</Nav.Link>
              <button className="btn btn-success" onClick={getApiData}>Get Users</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
