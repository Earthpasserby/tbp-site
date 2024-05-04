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

const BlogDetail = () => {
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
        style={{ backgroundColor: "#DC370414", height: "0.9vh" }}
      ></Container>
      <Container fluid>
        <Container className="">
          <Row className="BlogD">
            <Col md={6}>
              <h4>
                Mastering the Art of Digital Marketing: Proven Tactics for
                Online Success
              </h4>
              <p>
                Stay informed, inspired, and ahead of the curve. Explore our
                insightful articles, tips, and industry updates to fuel your
                journey towards success
              </p>
            </Col>
            <Col md={6}>
              <Image src="/./trend.png" className="img-fluid" />
            </Col>
          </Row>
          <hr />
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Container className="">
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
                  sollicitudin neque. Fusce eleifend odio nec ante consequat,
                  sit amet tincidunt justo consectetur. Duis viverra, justo id
                  ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                  nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac
                  ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed tempor ligula eu felis porta, nec volutpat ligula
                  bibendum. Integer ultricies ex et libero efficitur, ac
                  tristique odio fermentum. Nullam non ante a nibh venenatis
                  dictum. Nulla id sollicitudin neque. Fusce eleifend odio nec
                  ante consequat, sit amet tincidunt justo consectetur. Duis
                  viverra, justo id ultricies ultricies, ipsum orci tempor ex,
                  id euismod turpis nisi eget diam. Sed eget est eget dui
                  volutpat ullamcorper ac ac magna. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor ligula eu felis porta,
                  nec volutpat ligula bibendum. Integer ultricies ex et libero
                  efficitur, ac tristique odio fermentum. Nullam non ante a nibh
                  venenatis dictum. Nulla id sollicitudin neque. Fusce eleifend
                  odio nec ante consequat, sit amet tincidunt justo consectetur.
                  Duis viverra, justo id ultricies ultricies, ipsum orci tempor
                  ex, id euismod turpis nisi eget diam. Sed eget est eget dui
                  volutpat ullamcorper ac ac magna.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Image src="/./trend2.png" className="img-fluid" />
              </Col>
              <Col md={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempor ligula eu felis porta, nec volutpat ligula bibendum.
                  Integer ultricies ex et libero efficitur, ac tristique odio
                  fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                  sollicitudin neque. Fusce eleifend odio nec ante consequat,
                  sit amet tincidunt justo consectetur. Duis viverra, justo id
                  ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                  nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac
                  ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed tempor ligula eu felis porta, nec volutpat ligula
                  bibendum. Integer ultricies ex et libero efficitur, ac
                  tristique odio fermentum. Nullam non ante a nibh venenatis
                  dictum. Nulla id sollicitudin neque. Fusce eleifend odio nec
                  ante consequat, sit amet tincidunt justo consectetur. Duis
                  viverra, justo id ultricies ultricies, ipsum orci tempor ex,
                  id euismod turpis nisi eget diam. Sed eget est eget dui
                  volutpat ullamcorper ac ac magna.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor ligula eu felis porta,
                  nec volutpat ligula bibendum. Integer ultricies ex et libero
                  efficitur, ac tristique odio fermentum. Nullam non ante a nibh
                  venenatis dictum. Nulla id sollicitudin neque.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default BlogDetail;
