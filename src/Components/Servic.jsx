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
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Join from "./Join";

const Servic = () => {
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
      <Container fluid className="sett">
        <Row className="Servic">
          <Col
            md={8}
            className="Servic1"
            style={{ backgroundColor: "#161616", height: "70vh" }}
          >
            <div className="line2"></div>
            <h4>OUR SERVICES</h4>
            <p>
              At The Brand Plug, we offer a comprehensive suite of services
              designed to elevate your brand and drive sustainable growth in
              today's competitive landscape. From strategic branding to
              innovative digital marketing solutions, we're here to help you
              achieve your goals and unlock your brand's full potential. Explore
              our range of services below:
            </p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className=" LinkButton4 mt-4 mx-auto">
                <Button type="btn" variant="Secondary">
                  <span className="mx-2 spanButton">
                    Get started with us
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </Link>
          </Col>

          <Col
            md={4}
            className="Servic2"
            style={{ backgroundColor: "red", height: "60vh" }}
          >
            <Image src="/./lauh.png" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="Contain2">
        <Container>
          <Row>
            <Col md={6} className="parag-pic">
              <Image src="/./file1.png" className="img-fluid" />
            </Col>
            <Col md={6} className="parag">
              <div
                style={{
                  backgroundImage: "url('./one.png')",
                  minHeight: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "320px",
                }}
              >
                <h4>Branding</h4>
              </div>
              <p>
                Elevate your brand with our comprehensive suite of branding
                services.
              </p>
              <ul>
                <li>Brand Strategy and Positioning</li>
                <li>Logo Design and Brand Identity Development</li>
                <li>Brand Messaging and Storytelling</li>
                <li>Brand Guidelines and Standards</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="Contain2">
        <Container>
          <Row>
            <Col md={6} className="paragh">
              <div
                style={{
                  backgroundImage: "url('./TWO.png')",
                  minHeight: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "350px",
                }}
              >
                <h4>Digital Marketing Services</h4>
              </div>
              <p>
                Elevate your brand with our comprehensive suite of branding
                services.
              </p>
              <ul>
                <li>Social Media Marketing and Management</li>
                <li>Content Marketing and Copywriting</li>
                <li>Email Marketing Campaigns</li>
                <li>Influencer Marketing</li>
              </ul>
            </Col>
            <Col md={6} className="parag-pic">
              <Image src="/./lap.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="Contain2">
        <Container>
          <Row>
            <Col md={6} className="parag-pic">
              <Image src="/./lp.png" className="img-fluid" />
            </Col>
            <Col md={6} className="parag1">
              <div
                style={{
                  backgroundImage: "url('./THREE.png')",
                  minHeight: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "470px",
                }}
              >
                <h4>Search Engine Optimization (SEO)</h4>
              </div>
              <p>
                Boost your online visibility and rankings with our comprehensive
                SEO solutions
              </p>
              <ul>
                <li>On-Page and Off-Page SEO</li>
                <li>Keyword Research and Strategy</li>
                <li>SEO Audits and Consultation</li>
                <li>Local SEO Optimization</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="mt-4 cent"
        style={{ backgroundColor: "#161616" }}
      >
        <Container className="sen">
          <Row>
            <Col md={6} className="paraghe">
              <div
                style={{
                  backgroundImage: "url('./FOUR.png')",
                  minHeight: "70px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "300px",
                }}
              >
                <h4>Growth Strategies</h4>
              </div>
              <p>
                Empower your brand's growth with tailored strategies designed to
                understand, engage, and retain your audience effectively
              </p>
              <ul>
                <li>Market Research and Analysis</li>
                <li>Strategic Planning and Consulting</li>
                <li>Lead Generation and Conversion Optimization</li>
                <li>Customer Retention Strategies</li>
              </ul>
            </Col>
            <Col md={6} className="paraghe-pic">
              <Image src="/./ofc.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>

        <Container className="sen">
          <Row>
            <Col md={6} className="paraghe-pic">
              <Image src="/./lap1.png" className="img-fluid" />
            </Col>
            <Col md={6} className="paraghe">
              <div
                style={{
                  backgroundImage: "url('./FIVE.png')",
                  minHeight: "70px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "300px",
                }}
              >
                <h4>Content Creation</h4>
              </div>
              <p>Elevate your brand with our content creation expertise</p>
              <ul>
                <li>Creative Writing and Copywriting</li>
                <li>Blog Post Creation and Management</li>
                <li>Video Production and Editing</li>
                <li>Infographic Design</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="sen">
          <Row>
            <Col md={6} className="paraghe">
              <div
                style={{
                  backgroundImage: "url('./SIX.png')",
                  minHeight: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "300px",
                }}
              >
                <h5>Media Planning and Buying</h5>
              </div>
              <p>
                Maximize your reach and impact with our Media Planning and
                Buying services.
              </p>
              <ul>
                <li>Media Strategy Development</li>
                <li>Advertising Campaign Planning and Execution</li>
                <li>Budget Allocation and Optimization</li>
                <li>Performance Analytics and Reporting</li>
              </ul>
            </Col>
            <Col md={6} className="paraghe-pic">
              <Image src="/./read.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Container className="sen">
          <Row>
            <Col md={6} className="paraghe-pic">
              <Image src="/./pitch.png" className="img-fluid" />
            </Col>
            <Col md={6} className="paraghe">
              <div
                style={{
                  backgroundImage: "url('./SEVEN.png')",
                  minHeight: "80px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "350px",
                }}
              >
                <h5>Public Relations (PR)</h5>
              </div>
              <p>
                Navigating the media landscape, managing crises, orchestrating
                memorable events, and safeguarding your reputation
              </p>
              <ul>
                <li>Media Relations and Press Releases</li>
                <li>Crisis Communication Management</li>
                <li>Event Planning and Coordination</li>
                <li>Reputation Management</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="sen">
          <Row>
            <Col md={6} className="paraghe">
              <div
                style={{
                  backgroundImage: "url('./EIGHT.png')",
                  minHeight: "80px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "370px",
                }}
              >
                <h5>Consulting Services</h5>
              </div>
              <p>
                Elevate your strategy with personalized consultations. Enhance
                your brand's visual identity with expert graphic design.
              </p>
              <ul>
                <li>Business and Marketing Consultation</li>
                <li>Graphic Design for Marketing Collateral</li>
                <li>Workshops on Branding and Digital Marketing</li>
              </ul>
            </Col>
            <Col md={6} className="paraghe-pic">
              <Image src="/./sell.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Join className="cent1" />
    </>
  );
};
export default Servic;
