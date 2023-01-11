import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
const Header = () => {
  useEffect(()=>{
    document.title='Home'
   })
  return (
    <div>
        <Navbar className="border border-bottom" bg="light"  >
      <Container fluid>
        <img  src="tandas-logo.png" width="75" height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="#"> </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>    
  )
}
export default Header