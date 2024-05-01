import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Container style={{ backgroundColor: "#FFFFF" }} className="mt-4">
        <Row className="Service">
          <div className="">
            <p className="p1">Services</p>
            <h4 className="p4">What we Offer</h4>
            <p className="p2 mx-auto ">
              Elevating your brand with our custom solutions, designed
              specifically to boost your presence and achieve remarkable
              success.
            </p>
          </div>

          <Col md={4} className="" style={{ width: "350px", height: "252px" }}>
            <Image src="/./First-img.png" className="img-fluid Service-img" />
            <p className="Img-text">BRANDING</p>
          </Col>
          <Col md={4} className="" style={{ width: "350px", height: "252px" }}>
            <Image src="/./second-img.png" className="img-fluid Service-img" />
            <p className="Img-text">DIGITAL MARKETING</p>
          </Col>
          <Col md={4} className="" style={{ width: "350px", height: "252px" }}>
            <Image src="/./thrid-img.png" className="img-fluid Service-img" />
            <p className="Img-text">SEARCH ENGINE OPTIMIZATION (SEO)</p>
          </Col>
          <Link to="/" style={{ textDecoration: "none" }} className="b1">
            <div className=" LinkButton1 mx-auto">
              <Button
                type="btn"
                variant="Secondary"
                className="d-flex justify-content-center"
              >
                <span className="mx-2 spanButton ">
                  See our works
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </Link>
        </Row>
      </Container>
    </>
  );
};
export default Services;
