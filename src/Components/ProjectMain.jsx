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
// import Footer from "./Footer";

const ProjectMain = () => {
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
          backgroundImage: "url('./bot.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        <Row>
          <div className="content">
            <div className="centered-text">
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
              <p className="mb-4">See What We've Been Up To</p>
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid className="projectMain">
        <Container className="">
          <Row className="ProjectMain">
            <Col>
              <span>OUR WORK</span>
              <h4>CASE STUDIES</h4>
              <p>
                We ignite brand narratives with transformative creativity,
                strategy, and purpose, surpassing expectations and delivering
                impactful experiences
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./men.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./bag1.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./cadh.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./men.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./cadn.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="/./ddd.png" className="img-fluid " />
                <Card.Title className="card-title">
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className=" linkButton1 mt-4">
                    <Button type="btn" variant="Secondary">
                      <span className="mx-2 spanButton">
                        Read More
                        <FaArrowRight className="mx-2" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row className="">
            <div className="pM ">
              <span>OUR WORK</span>
              <h4>GALLERY</h4>
              <p>Explore Our Visual Journey</p>
            </div>
          </Row>
        </Container>
        <Row>
          <Col sm={2} className="">
            <Image src="/./boc1.png" className="img-fluid " />
          </Col>{" "}
          <Col>
            <Image src="/./boc2.png" className="img-fluid " />
          </Col>{" "}
          <Col sm={2}>
            <Image src="/./boc3.png" className="img-fluid " />
          </Col>
          <Col sm={2}>
            <Image src="/./boc5.png" className="img-fluid " />
          </Col>
          <Col sm={2}>
            <Image src="/./boc3.png" className="img-fluid " />
          </Col>
          <Col sm={2}>
            <Image src="/./boc3.png" className="img-fluid " />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src="/./shirt.png" className="img-fluid " />
          </Col>
          <Col md={4} className="px-5">
            <Image src="/./bbig.png" className="img-fluid " />
          </Col>
          <Col md={4} className="px-5">
            <Image src="/./pen.png" className="img-fluid " />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProjectMain;
