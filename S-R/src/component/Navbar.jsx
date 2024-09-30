import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/S-R Computer Institute.png';

function Navbara() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">S-R Institute</Navbar.Brand> */}
        
        <div className="flex-shrink-0 gap-6">
            <img src={logo} alt="Logo" className="h-10 w-auto gap-88 mr-10" />
        </div>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto font-semibold">
            <Nav.Link href="Home" className="hover:text-orange-500">HOME</Nav.Link>
            <Nav.Link href="About" className="hover:text-orange-500">ABOUT US</Nav.Link>
            <Nav.Link href="Services" className="hover:text-orange-500">SERVICES</Nav.Link>
            <Nav.Link href="Portfolio" className="hover:text-orange-500">PORTFOLIO</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets" className="hover:text-orange-500">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="hover:text-orange-500">
              Dank memes
            </Nav.Link> */}
            <Nav.Link href="Contact" className="font-semibold hover:text-orange-500">CONTACT US</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbara;