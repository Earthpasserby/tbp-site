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
import Pictures from "./Pictures";
import Join from "./Join";
import Footer from "./Footer";
import { FaArrowDownLong } from "react-icons/fa6";

// import Footer from "./Footer";

const ProjectMain = () => {
  return (
    <>
      <Container fluid className="Aboutpage">
        <Navbar collapseOnSelect expand="lg" className="mx-5">
          <Navbar.Brand href="#home">
            <Link
              to="/MainAbout"
              style={{ textDecoration: "none" }}
              className="Link"
            >
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
            <Nav className=" mx-4 tbp-Icon">
              <Link to="/Contact" className="Link">
                <Image src="/./Facebook.png" className="img-fluid mx-2" />
              </Link>
              <Link to="/Contact" className="Link">
                <Image src="/./x.png" className="img-fluid mx-2" />
              </Link>
              <Link to="/Contact" className="Link">
                <Image src="/./ig.png" className="img-fluid" />
              </Link>
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
              <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
                <Card.Title className="card-title" style={{ color: "white" }}>
                  Lorem ipsum dolor sit
                </Card.Title>
                <Card.Text>
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum
                  </p>
                </Card.Text>
                <Link to="/MainAbout" style={{ textDecoration: "none" }}>
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
        <Pictures />
        <Link
          to="/BlogDetail"
          style={{ textDecoration: "none", marginTop: "100px" }}
        >
          <div
            className=" LinkButton mx-auto "
            style={{ marginTop: "150px", marginBottom: "100px" }}
          >
            <Button
              type="btn"
              variant="Secondary"
              className="d-flex justify-content-center"
            >
              <span className="mx-2 spanButton ">
                <FaArrowDownLong />
                Load More
              </span>
            </Button>
          </div>
        </Link>
        <Join />
      </Container>
      <Footer />
    </>
  );
};
export default ProjectMain;
