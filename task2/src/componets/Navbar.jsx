
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav,  Form, Button } from 'react-bootstrap';

function MyNavbar() {
  return (
    <div className="text-center w-100">
     <Navbar expand="lg" bg="light" className="shadow-sm ">
  <Container className="d-flex md-5 ">
    <Navbar.Brand href="#" className="fw-bold text-primary ml-0 ">
      Employee Portal
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />

    <Navbar.Collapse id="navbarScroll" className="w-100">
      <Nav className="mx-auto text-center w-100 justify-content-center ">
        <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
        <Nav.Link href="#features" className="mx-3">Features</Nav.Link>
        <Nav.Link href="#Abouts" className="mx-3">Abouts</Nav.Link>
        <Nav.Link href="#Setting" className="mx-3">Setting</Nav.Link>
      </Nav>

      <Form className="d-flex justify-content-center w-100">
        <Form.Control
          type="search"
          placeholder="Search employees..."
          className="me-2"
          aria-label="Search"
          style={{ maxWidth: "300px" }}
        />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  );
}

export default MyNavbar;
