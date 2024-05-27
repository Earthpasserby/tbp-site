import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Featured = () => {
  return (
    <Container
      style={{ backgroundColor: "#FFFFF" }}
      className="mt-5 feat-P mb-5"
    >
      <Row className="Feat-p justify-content-center">
        <div className="Service">
          <p className="p1 mt-4">FEATURED CLIENTS</p>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-2 col-4">
          <Col>
            <Image
              src="/./Tees Kitchen 1.png"
              className="img-fluid logo"
              style={{ width: "166.13px", height: "129.69px" }}
            />
          </Col>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-4">
          <Col>
            <Image
              src="/./Tenderr Logo (Black) 1.png"
              className="img-fluid"
              style={{ width: "128.62px", height: "127.55px" }}
            />
          </Col>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-4">
          <Col>
            <Image
              src="/./Oba Autos 1 (1).png"
              className="img-fluid"
              style={{ width: "138.26px", height: "78.24px" }}
            />
          </Col>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-4">
          <Col>
            <Image
              src="/./GC Logo 1.png"
              className="img-fluid"
              style={{ width: "197.21px", height: "80.39px" }}
            />
          </Col>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
          <Col>
            <Image
              src="/./Amagite Media 1.png"
              className="img-fluid"
              style={{ width: "131.83px", height: "183.28px" }}
            />
          </Col>
        </div>
        <div className=" text-center col-6 col-md-12 col-lg-8">
          <Col>
            <Image
              src="/./Meenees Logo (Main) 1.png"
              className="img-fluid"
              style={{ width: "112.54px", height: "23.58px" }}
            />
          </Col>
        </div>
      </Row>
    </Container>
  );
};
export default Featured;
