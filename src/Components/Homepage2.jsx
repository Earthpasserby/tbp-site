import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Homepage2 = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#FFF9F8" }} className="home">
        <Row className="mx-auto">
          <Col md={7} className="HomeParagraph1 mb-5">
            <pre>OUR MISSION</pre>
            <h4 className="mb-4">
              Empowering <span className="Home-Span"> Brands</span> Fueling{" "}
              <span className="Home-Span"> Growth </span>
            </h4>
            <p>
              We are on a mission to create waves of awareness and catalyze
              growth for brands and businesses. Our dedicated team, comprising
              young, initiative-driven, and experienced minds, is committed to
              delivering top-notch solutions in the digital space.
            </p>
          </Col>
          <Col md={5} className="mt-5">
            <Image
              src="/./flower.png"
              className="img-fluid image-class"
              style={{ width: "267.32px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage2;
