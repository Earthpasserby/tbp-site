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
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Join from "./Join";

const Contact = () => {
  return (
    <>
      <Container fluid className="Aboutpage">
        <Navbar collapseOnSelect expand="lg" className="mx-5">
          <Navbar.Brand href="#home">
            <Link to="/" style={{ textDecoration: "none" }} className="Link">
              <Image src="/./The Brand Plug Logo.png" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link href="AboutPage">
                <Link
                  to="/AboutPage"
                  style={{ textDecoration: "none" }}
                  className="Link"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="Services">
                <Link
                  to="/Servic"
                  style={{ textDecoration: "none" }}
                  className="Link"
                >
                  Our Services
                </Link>
              </Nav.Link>

              <Nav.Link href="Project">
                <Link
                  to="/ProjectMain"
                  style={{ textDecoration: "none" }}
                  className="Link"
                >
                  Our Projects
                </Link>
              </Nav.Link>

              <Nav.Link href="Blog">
                <Link
                  to="/Blog"
                  style={{ textDecoration: "none" }}
                  className="Link"
                >
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link href="contact">
                <Link
                  to="/Contact"
                  style={{ textDecoration: "none" }}
                  className="Link"
                >
                  Contact
                </Link>
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
        className="Contact-B"
        style={{
          backgroundImage: "url('./call.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        <Container>
          <Row className="Contact">
            <Col xs={12} md={6} className="Contact-details">
              <Row>
                <Col>
                  <div className="line"></div>
                  <h4>GET IN TOUCH!</h4>
                  <p className="Contact-p">
                    We're here to help! Reach out to us with any questions,
                    inquiries, or collaboration opportunities. Let's start a
                    conversation and see how we can work together to achieve
                    your goals
                  </p>
                  <Col className="Contact-Address">
                    <h5>OR</h5>
                    <p className="p1">Call us or send us an email</p>
                    <p className="p2">
                      <FaPhone className="mx-2 contact-Icon" />
                      +234 803 855 3554
                    </p>
                    <p className="p3">
                       <MdMail className="mx-1 contact-Icon" />
                      thebrandplugng@gmail.com
                    </p>
                    <div className="mx-1 social-media-links">
                      <p className="p4">OUR SOCIAL MEDIA</p>
                      <Image src="/./Facebook.png" className="img-fluid " />
                      <Image src="/./x.png" className="img-fluid" />
                      <Image src="/./ig.png" className="img-fluid" />
                    </div>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col className="Contact-form" xs={12} md={6}>
              <Form className="contact-form">
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
                    style={{ height: "200px" }}
                  />
                </Form.Group>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div
                    className=" LinkButton mx-auto mt-3 Contact-Button"
                    style={{ width: "427px" }}
                  >
                    <Button
                      type="btn"
                      variant="Secondary"
                      className="d-flex justify-content-center"
                    >
                      <span className="mx-2 spanButton ">
                        Submit
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Join />
      <Footer />
    </>
  );
};
export default Contact;
