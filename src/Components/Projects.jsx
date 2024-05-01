import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#F6F6F6" }}
      className="Project "
    >
      <Row className="mx-auto mt-4">
        <Col md={5} className="mb-2 mt-5">
          <pre>PROJECTS</pre>
          <h4 className="mb-4">OUR CASE STUDIES</h4>
          <p>
            With a relentless drive for success, we strategically position
            brands for optimal visibility and impact in the digital landscape by
            consistently driving traffic, and delivering measurable results for
            our diverse clientele.
          </p>

          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="Button-project"
          >
            <div className=" LinkButton mt-5">
              <Button type="btn" variant="Secondary">
                <span className="mx-2 spanButton ">
                  See our works
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </Link>
        </Col>
        <Col md={7} className="mt-5 image-project">
          <Image
            src="/./book.png"
            className="img-fluid "
            style={{ width: "580px", height: "600px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
