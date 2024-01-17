//import { Button } from "bootstrap"
import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
    <Navbar expand="lg" className="bg-body-black">
        <Container>
            <Navbar.Brand href="#home">
                <img 
                    src="%PUBLIC_URL%/checkers.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Checkers logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        </Container>
    </Navbar>
}

export default Menu;