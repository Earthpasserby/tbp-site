import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#FFF9F8",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
      }}
    >
      <Row className="centered-row mt-5">
        <div className="join ">
          <h4>Join us on our journey to excellence and innovation</h4>
          <p>
            Together, we'll shape the future of branding and business growth,
            one success story at a time. Let's create meaningful impact and
            inspire greatness.
            <br />
            <span style={{ color: "#FF3C00", fontWeight: "700px" }}>
              Welcome to The Brand Plug family!
            </span>
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className=" LinkButton6 mt-4 mx-auto">
              <Button type="btn" variant="Secondary">
                <span className="mx-2 spanButton">
                  Get started with us
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </Link>
        </div>
      </Row>
    </Container>
  );
};
export default Join;
