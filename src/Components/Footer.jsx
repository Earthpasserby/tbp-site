import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid style={{ backgroundColor: "#161616" }}>
          <Row className="centered-row2 justify-content-center">
            <Col md={5}>
              <Image src="/./The Brand Plug Logo.png" className="img-fluid" />
              <p className="mt-4 p1">
                At The Brand Plug, we are the architects of possibility, the
                artisans of innovation, and the champions of your brand's
                journey to greatness. Our ethos is built on a foundation of
                creativity, fueled by passion, and driven by a relentless
                pursuit of excellence.
              </p>
              <div className="mt-4">
                <Image src="/./Facebook.png" className="img-fluid" />
                <Image src="/./x.png" className="img-fluid" />
                <Image src="/./ig.png" className="img-fluid" />
              </div>
            </Col>
            <Col md={4}>
              <h5>Services</h5>
              <p>Branding</p>
              <p>Digital Marketing</p>
              <p>Search Engine Optimization (SEO)</p>
              <p> Growth Strategies</p>
              <p> Content Creation</p>
              <p> Media Planning and Buying</p>
              <p> Public Relations (PR)</p>
              <p> Consulting Services</p>
            </Col>
            <Col md={3}>
              <h5>OTHERS</h5>
              <p>Projects</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </Col>
            <hr />
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
