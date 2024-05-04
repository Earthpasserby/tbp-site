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
  Tabs,
  Tab,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Join from "./Join";

const Blog = () => {
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
            <Col md={7} className="Blog-blog">
              <div className="line1"></div>
              <h4>BLOG</h4>
              <p>
                Stay informed, inspired, and ahead of the curve. Explore our
                insightful articles, tips, and industry updates to fuel your
                journey towards success
              </p>
            </Col>
            <Col md={5} className="Blog-form">
              <form action="#">
                <div className="form-box">
                  <input
                    type="text"
                    name="EmailAddress"
                    placeholder="Enter Your Email Address"
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="Blog-Tab">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="All" title="All">
            All
          </Tab>
          <Tab eventKey="Media" title="Media">
            No Media
          </Tab>
          <Tab eventKey="Content" title="Content Writing">
            Content Writing
          </Tab>
          <Tab eventKey="Digital Marketing" title="Digital Marketing">
            Digital Marketing
          </Tab>
          <Tab eventKey="Loremph Ipsu" title="Loremph Ipsun">
            Loremph Ipsun
          </Tab>
          <Tab eventKey="Loremph Isu" title="Loremph Isu">
            Loremph Isu
          </Tab>
        </Tabs>
      </Container>
      <Container className="">
        <Row className="mt-5 ">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img src="/./book1.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
                <div className=" linkButton1 ">
                  <Button type="trend" variant="Secondary">
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./book1.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./book1.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./book1.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
              <Card.Img src="/./trend.png" className="img-fluid " />

              <Card.Text>
                <p>
                  Mastering the Art of Digital Marketing: Proven Tactics for
                  Online Success
                </p>
              </Card.Text>
              <Link to="/BlogDetail" style={{ textDecoration: "none" }}>
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
      </Container>
      <Join />
      <Footer />
    </>
  );
};
export default Blog;
