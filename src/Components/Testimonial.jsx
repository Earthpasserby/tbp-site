import React from "react";
import { Container, Row, Image, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#161616", minHeight: "70vh" }}
        className="home"
      >
        <Row className="mx-auto Service">
          <Col className="mb-0" style={{ marginTop: "20px" }}>
            <p className="p1">TESTIMONIALS</p>
            <h4 className="mb-0" style={{ color: "#FFFFFF" }}>
              What our Clients Says
            </h4>

            <Carousel fade className="">
              <Carousel.Item>
                <div className="image-container">
                  <Image
                    src="/./Meenees Logo (Main) 1.png"
                    className="img-fluid centered-img"
                    style={{ width: "112.54px", height: "23.58px" }}
                  />
                </div>
                <Carousel.Caption>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <Image
                    src="/./Meenees Logo (Main) 1.png"
                    className="img-fluid centered-img"
                    style={{ width: "112.54px", height: "23.58px" }}
                  />
                </div>
                <Carousel.Caption>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-container">
                  <Image
                    src="/./Meenees Logo (Main) 1.png"
                    className="img-fluid centered-img"
                    style={{ width: "112.54px", height: "23.58px" }}
                  />
                </div>
                <Carousel.Caption>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor ligula eu felis porta, nec volutpat ligula bibendum.
                    sit amet tincidunt justo consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundImage: "url('./key.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <Row>
          <div className="Service Brand-Talk">
            <h4 className="p5">
              Ready to make some noise in the digital realm?
              <br />
              Let's plug into success together!
            </h4>
            <div className="p6 mt-5">
              <p>
                The Brand Plug –{" "}
                <span style={{ color: "#FF3C00", fontWeight: "700px" }}>
                  Amplify, Elevate, Succeed{" "}
                </span>
              </p>
            </div>
            <Link to="/" style={{ textDecoration: "none" }} className="button3">
              <div className=" LinkButton3 mt-4 mx-auto">
                <Button type="btn" variant="Secondary">
                  <span className="mx-2 spanButton1">
                    Get started with us
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Testimonial;
