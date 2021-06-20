import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.svg'

export default () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/stars">Stars</Nav.Link>
        <Nav.Link href="/universes">Universes</Nav.Link>
        <Nav.Link href="/imprint">Imprint</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
