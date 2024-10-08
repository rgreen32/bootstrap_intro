import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Primary</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <ProgressBar now={60} />

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/en/full/BUS_20241004_BUS_245008_Mike-Tyson-will-fight-Jake-Paul-at-age-of-58-1024x576_9ba1a6e1.webp&width=1024&height=576"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/en/full/BUS_20241004_BUS_245008_Mike-Tyson-will-fight-Jake-Paul-at-age-of-58-1024x576_9ba1a6e1.webp&width=1024&height=576"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/en/full/BUS_20241004_BUS_245008_Mike-Tyson-will-fight-Jake-Paul-at-age-of-58-1024x576_9ba1a6e1.webp&width=1024&height=576"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
