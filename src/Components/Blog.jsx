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

const Blog = () => {
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
          <Row className="Blog">
            <Col md={8}>
              <div className="line1"></div>
              <h4>BLOG</h4>
              <p>
                Stay informed, inspired, and ahead of the curve. Explore our
                insightful articles, tips, and industry updates to fuel your
                journey towards success
              </p>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img src="/./men.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
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

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      Continue Reading
                      <FaArrowRight className="mx-2" />
                    </span>
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Blog;
