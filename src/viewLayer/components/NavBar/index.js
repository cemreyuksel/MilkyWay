import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/stars">Stars</Nav.Link>
        <Nav.Link href="/universes">Universes</Nav.Link>
        <Nav.Link href="/imprint">Imprint</Nav.Link>
      </Nav>
      <Nav.Link href="/">
        <img
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </Nav.Link>
    </Container>
  </Navbar>
);

export default NavBar;
