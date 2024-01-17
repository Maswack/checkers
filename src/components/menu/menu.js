import { Container, Nav, Navbar } from "react-bootstrap";
import "./menu.css";

function Menu() {
    return (
        <Navbar expand="lg"  class="bg-dark m-nav-bg">
            <Container style={{height:"10vh"}} class="d-inline" >
                <Navbar.Brand href="#home" class="bg-white">
                    <img 
                        src="/checkers.svg"
                        width="32"
                        height="32"
                        class="d-inline-block align-top"
                        alt="Checkers logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav class="me-auto text-primary">
                        <Nav.Link href="#home" class="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" class="text-light">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    )
}

export default Menu;