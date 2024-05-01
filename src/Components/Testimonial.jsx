import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#161616" }} className="home">
        <Row className="mx-auto Service">
          <Col className="mb-5">
            <p className="p1">TESTIMONIALS</p>
            <h4 className="mb-4" style={{ color: "#FFFFFF" }}>
              What our Clients Says
            </h4>
            <Image
              src="/./Meenees Logo (Main) 1.png"
              className="img-fluid  mx-auto"
              style={{ width: "112.54px", height: "23.58px" }}
            />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundImage: "url('./key.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100px",
        }}
      >
        <Row>
          <div className="Service" style={{marginTop:"200px"}}>
            <h4 className="p5">
              Ready to make some noise in the digital realm? Let's plug into
              success together!
            </h4>
            <p className="p6 mx-auto ">
              The Brand Plug –{" "}
              <span style={{ color: "#FF3C00", fontWeight: "700px" }}>
                Amplify, Elevate, Succeed{" "}
              </span>
            </p>
            <Link to="/" style={{ textDecoration: "none" }} className="">
              <div className=" LinkButton2 mt-4 mx-auto">
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
