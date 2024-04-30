import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Pattners = () => {
  return (
    <Container style={{ backgroundColor: "#FFFFF" }} className="mt-5">
      <Row className="Service">
        <div className="">
          <p className="p1">PARTNERSHIP</p>
          <h4 className="p3">Why Partner with us?</h4>
          <p className="p2 mx-auto ">
            With a relentless drive for success, we strategically position
            brands for optimal visibility and impact in the digital landscape by
            consistently driving traffic, and delivering measurable results for
            our diverse clientele.
          </p>
        </div>
      </Row>
    </Container>
  );
};
export default Pattners;
