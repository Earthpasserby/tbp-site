import React from "react";
import { Button, Container, Row, Image, Navbar, Nav } from "react-bootstrap";
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

const HomePage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: "url('./bg1-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <Navbar collapseOnSelect expand="lg" className="mx-5">
          <Navbar.Brand href="#home">
            <Image src="/./The Brand Plug Logo.png" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link href="#features" className="Link1">
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link2">
                Our Services
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link3">
                Our Projects
              </Nav.Link>
              <Nav.Link href="#pricing" className="Link4">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav className="">
              <Image src="/./Facebook.png" className="img-fluid" />
              <Image src="/./x.png" className="img-fluid" />
              <Image src="/./ig.png" className="img-fluid" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
    </>
  );
};
export default HomePage;
