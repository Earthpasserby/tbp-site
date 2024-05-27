import React from "react";
import {
  Button,
  Container,
  Row,
  Image,
  Navbar,
  Nav,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Homepage2 from "./Homepage2";
import Services from "./Services";
import Pattners from "./Pattners";
import Featured from "./Featured";
import Projects from "./Projects";
import Experience from "./Experience";
import Testimonial from "./Testimonial";
import Knowledge from "./Knowledge";
import Join from "./Join";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: "url('./bg1-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
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
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  className="Link"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link href="Services">
                <Link
                  to="/Servic"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  className="Link"
                >
                  Our Services
                </Link>
              </Nav.Link>

              <Nav.Link href="Project">
                <Link
                  to="/ProjectMain"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  className="Link"
                >
                  Our Projects
                </Link>
              </Nav.Link>

              <Nav.Link href="Blog">
                <Link
                  to="/Blog"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  className="Link"
                >
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link href="Blog">
                <Link
                  to="/Contact"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  className="Link"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className=" mx-4">
              <Image src="/./Facebook.png" className="img-fluid mx-2" />
              <Image src="/./x.png" className="img-fluid mx-2" />
              <Image src="/./ig.png" className="img-fluid" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Col>
          <Row>
            <div className="content">
              <div className="centered-text">
                <h4>WELCOME TO THE BRAND PLUG!</h4>
                <p className="mb-4">
                  We Help Brands and Businesses Find their Voice and Compete in
                  their various Niche
                </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" LinkButton mx-auto">
                    <Button
                      type="btn"
                      variant="Secondary"
                      className="d-flex justify-content-center"
                    >
                      <span className="mx-2 spanButton ">
                        See our works
                        <FaArrowRight />
                      </span>
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
      <Homepage2 />
      <Services />
      <Pattners />
      <Featured />
      <Projects />
      <Experience />
      <Testimonial />
      <Knowledge />
      <Join />
      <Footer />
    </>
  );
};
export default HomePage;
