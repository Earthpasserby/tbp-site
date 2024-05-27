import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Knowledge = () => {
  return (
    <Container fluid className="mt-5 home">
      <Row className="mx-auto">
        <div className="known">
          <h4>Always eager for new knowledge?</h4>
          <p>
            Explore our latest articles on branding, growth strategies, and
            digital marketing. Stay ahead with insights curated by our experts.
            Let's journey together towards success.
            <br />
            <span> Welcome to The Brand Plug.</span>
          </p>
        </div>
        <Col md={6}>
          <Image
            src="/./booc.png"
            className="img-fluid"
            style={{ width: "540px" }}
          />
          <p className="knownCol">
            Unveiling the Power of Branding: Strategies for Success in the
            Digital Age
          </p>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="Button-link"
          >
            <div className=" LinkButton5 mt-4 mb-4">
              <Button type="btn" variant="Secondary">
                <span className="mx-2 spanButton1">
                  Continue Reading
                  <FaArrowRight className="mx-2" />
                </span>
              </Button>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Image
            src="/./stock.png"
            className="img-fluid "
            style={{ width: "540px" }}
          />
          <p className="knownCol">
            Mastering the Art of Digital Marketing: Proven Tactics for Online
            Success
          </p>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="Button-link"
          >
            <div className=" LinkButton5 mt-4 mb-4">
              <Button type="btn" variant="Secondary">
                <span className="mx-2 spanButton1">
                  Continue Reading
                  <FaArrowRight className="mx-2" />
                </span>
              </Button>
            </div>
          </Link>
        </Col>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className=" LinkButton8 mx-auto mb-3 mt-4">
            <Button
              type="btn"
              variant="Secondary"
              className="d-flex justify-content-center"
            >
              <span className="mx-2 spanButton">
                See more
                <FaArrowRight className="mx-2" />
              </span>
            </Button>
          </div>
        </Link>
      </Row>
    </Container>
  );
};
export default Knowledge;
