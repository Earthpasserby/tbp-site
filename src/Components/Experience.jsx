import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#161616" }}
      className="mt-1 home"
    >
      <Row className="Exp-header ">
        <Col md={8} className="mb-2">
          <h4 className="mb-4" style={{ color: "#FFFFFF" }}>
            Join The Brand Plug
            <span style={{ color: "#FF3C00" }}> Experience</span>
          </h4>
          <p className="mb-4">
            Your success is our success. We believe in collaborative
            partnerships, working closely with our clients to understand their
            vision and goals. Embark on a journey with The Brand Plug, where
            every project is a testament to our commitment to excellence.
            Whether you're a startup looking to make a mark or an established
            business seeking a fresh perspective, we're here to amplify your
            brand's presence and foster sustainable growth.
          </p>

          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="Button-link"
          >
            <div className=" LinkButton2 mt-4 mb-4">
              <Button type="btn" variant="Secondary">
                <span className="mx-2 spanButton1">
                  Get started with us
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </Link>
        </Col>
        <Col md={4} className="mt-4 mb-4">
          <Image
            src="/./light.png"
            className="img-fluid "
            style={{ color: "#FFB199" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Experience;
