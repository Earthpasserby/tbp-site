import React from "react";
import {
  Button,
  Container,
  Row,
  Image,
  Navbar,
  Nav,
  Col,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeftLong } from "react-icons/fa6";

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
        <Container className=" BlogD">
          <Row>
            <Col md={6} className="BlogD1">
              <div className="d-flex justify-space-between Blogd">
                <div>
                  <Image src="/./Profile.png" className="img-fluid" />
                </div>
                <Stack direction="horizontal" gap={3} className="mx-2">
                  <span style={{ color: "#FF3C00" }}>Daniel Onakpa</span>
                  <span style={{ color: "#8F8F8F" }}> 5 min read</span>
                </Stack>
              </div>
              <h4>
                Mastering the Art of Digital Marketing: Proven Tactics for
                Online Success
              </h4>
              <p>
                In today's digital age, mastering the art of digital marketing
                is essential for any business striving for online success. In
                this blog post, we'll explore some proven tactics and strategies
                that can help businesses elevate their digital marketing efforts
                and achieve remarkable results.
              </p>
            </Col>
            <Col md={6} className="BlogD2">
              <Image src="/./trend.png" className="img-fluid" />
            </Col>
          </Row>
          <hr />
        </Container>
      </Container>

      <Container fluid>
        <Container className="Blog-D">
          <Row>
            <Col className="">
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

          <Row className="Blog-D2">
            <Col md={6} className="Blog-D3">
              <Image src="/./trend2.png" className="img-fluid" />
            </Col>
            <Col md={6} className="Blog-D4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque. Fusce eleifend odio nec ante consequat, sit
                amet tincidunt justo consectetur. Duis viverra, justo id
                ultricies ultricies, ipsum orci tempor ex, id euismod turpis
                nisi eget diam. Sed eget est eget dui volutpat ullamcorper ac ac
                magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed tempor ligula eu felis porta, nec volutpat ligula bibendum.
                Integer ultricies ex et libero efficitur, ac tristique odio
                fermentum. Nullam non ante a nibh venenatis dictum. Nulla id
                sollicitudin neque.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};
export default BlogDetail;
