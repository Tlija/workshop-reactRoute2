import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




export const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" >Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/todos" >Todos</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
