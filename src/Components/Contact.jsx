import React from "react";
import {
  Button,
  Container,
  Row,
  Image,
  Navbar,
  Nav,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Container fluid className="Aboutpage">
        <Navbar collapseOnSelect expand="lg" className="mx-5">
          <Navbar.Brand href="#home">
            <Image src="/./The Brand Plug Logo.png" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link href="" className="Link   ">
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link">
                Our Services
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link">
                Our Projects
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav className=" mx-4">
              <Image src="/./Facebook.png" className="img-fluid" />
              <Image src="/./x.png" className="img-fluid" />
              <Image src="/./ig.png" className="img-fluid" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container
        fluid
        style={{
          backgroundImage: "url('./call.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        <Container>
          {/* <Col xs={12} md={6} className="Contact-details">
            <Row>
              <Col>
                <div className="line"></div>
                <h4>GET IN TOUCH!</h4>
                <p>
                  We're here to help! Reach out to us with any questions,
                  inquiries, or collaboration opportunities. Let's start a
                  conversation and see how we can work together to achieve your
                  goals
                </p>
                <Col>
                  <h5>OR</h5>
                  <p>Call us or send us an email</p>
                  <p>+234 803 855 3554</p>
                  <p> thebrandplugng@gmail.com</p>
                  <div className="mx-1 social-media-links">
                    <p>OUR SOCIAL MEDIA</p>
                    <Image src="/./Facebook.png" className="img-fluid" />
                    <Image src="/./x.png" className="img-fluid" />
                    <Image src="/./ig.png" className="img-fluid" />
                  </div>
                </Col>
              </Col>
            </Row>
          </Col> */}
          <Col className="Contact-form" xs={12} md={6}>
            <Form>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton mx-auto">
                  <Button
                    type="btn"
                    variant="Secondary"
                    className="d-flex justify-content-center"
                  >
                    <span className="mx-2 spanButton ">OUR PROJECTS</span>
                  </Button>
                </div>
              </Link>
            </Form>
          </Col>
          <Col className="Contact-form" xs={12} md={6}>
            <Form>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton mx-auto">
                  <Button
                    type="btn"
                    variant="Secondary"
                    className="d-flex justify-content-center"
                  >
                    <span className="mx-2 spanButton ">OUR PROJECTS</span>
                  </Button>
                </div>
              </Link>
            </Form>
          </Col>
        </Container>
      </Container>
    </>
  );
};
export default Contact;
