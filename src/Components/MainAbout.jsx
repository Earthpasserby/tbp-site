import React from "react";
import {
  Button,
  Container,
  Row,
  Image,
  Navbar,
  Nav,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const MainAbout = () => {
  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" className="mx-5">
          <Navbar.Brand href="#home">
            <Image src="/./The Brand Plug Logo.png" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link href="/src/Components/AboutPage.jsx" className="Link">
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
            <Nav className="">
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
          backgroundImage: "url('/./m1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      ></Container>
      <Container fluid>
        <Container className="MainAbout">
          <Row>
            <Col>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula eu felis porta, nec volutpat ligula bibendum.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid >
        <Container className="videoPlayer ">
          <video
            controls
            width="70%"
            className="videoPlayer"
            src={
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6QGOhCZLdhs?si=6ppWk5vXXfa_HJ_2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
          ></video>
        </Container>
      </Container>
      <Container fluid>
        <Container className="MinAbout">
          <Row>
            <Col>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula eu felis porta, nec volutpat ligula bibendum.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna.
              </p>
            </Col>
          </Row>
        </Container>
        <Row className="mb-5 minAb">
          <Col md={4}>
            <Image src="/./m1.png" className="img-fluid m1" />
          </Col>
          <Col md={4}>
            <div>
              <div className="mb-4">
                <Image src="/./m2.png" className="img-fluid " />
              </div>
              <div className="mt-4">
                <Image src="/./m4.png" className="img-fluid " />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Image src="/./m3.png" className="img-fluid " />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default MainAbout;
