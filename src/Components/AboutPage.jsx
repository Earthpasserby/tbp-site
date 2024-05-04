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
import { Link } from "react-router-dom";
import Featured from "./Featured";
import Join from "./Join";
import Footer from "./Footer";

const AboutPage = () => {
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
                  to="/mainAbout"
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
        style={{ backgroundColor: "#DC370414", height: "0.9vh" }}
      ></Container>
      <Container fluid>
        <Container className="">
          <Row className="About-us">
            <Col>
              <div className="line"></div>
              <h4>ABOUT US</h4>
              <p>
                We ignite brand narratives with transformative creativity,
                strategy, and purpose, surpassing expectations and delivering
                impactful experiences
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col md={6} className="pic">
              <Image src="/./group.png" className="img-fluid" />
            </Col>
            <Col md={6} className="para">
              <h4>
                Celebrating the Essence of{" "}
                <span style={{ color: "#FF3C00" }}> Creativity </span> and
                <span style={{ color: "#FF3C00" }}> Innovation </span>
              </h4>
              <p>
                The Brand Plug is your trusted partner in navigating the dynamic
                world of branding and business growth. Our journey is defined by
                a relentless pursuit of excellence, driven by a deep
                understanding of the intricacies of the digital realm. We pride
                ourselves on our ability to craft bespoke strategies that not
                only elevate brands but also ignite sustainable growth. At The
                Brand Plug, we believe in the transformative power of
                collaboration, working hand in hand with our clients to turn
                visions into reality. With every project, we strive to redefine
                industry standards and amplify brand presence, fostering success
                stories that resonate across industries
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#161616" }}>
        <Container>
          <Row className="mission">
            <Col xs={12} md={6}>
              <span className="M-span">MISSION</span>
              <h4>Our Mission Statement</h4>
              <p>
                At The Brand Plug, our mission is to empower businesses with
                compelling and impactful branding, growth strategies, and media
                solutions. We strive to be catalysts for success, partnering
                with our clients to create resonant brand experiences that
                transcend expectations. Through innovation, creativity, and
                strategic insights, we aim to elevate brands to new heights in a
                dynamic and ever-evolving marketplace.
              </p>
            </Col>
            <Col xs={12} md={6} className="About-pic">
              <Image src="/./step.png" className="img-fluid" />
            </Col>
          </Row>

          <Row className="mission2 ">
            <Col xs={12} md={6}>
              <span className="M-span2">VISION</span>
              <h4>Our Vision Statement</h4>
              <p>
                Our vision at The Brand Plug is to be recognized as a pioneering
                force in the realm of branding, growth, and media, known for our
                unwavering commitment to excellence and transformative results.
                We aspire to be the go-to partner for businesses seeking not
                just services but a collaborative journey toward achieving and
                exceeding their goals. With a focus on sustainability and
                enduring impact, we envision a future where The Brand Plug
                stands as a beacon of inspiration and success in the industry
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Featured />
      <Join />
      <Footer />
    </>
  );
};
export default AboutPage;
