import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className="hero-section">
      <Row className="align-items-center">
        <Col xs={12} md={8} lg={6} className="mx-auto text-center">
          <h1 className="display-4">Hello I'M A UI & UX Designer.</h1>
          <p className="lead">
            Hi I'm X, a passionate UI/UX designer based in Bangladesh. Welcome
            to portfolio world.
          </p>
          <div className="social-links gap-2 d-flex justify-content-center">
            <img src="/linkedin.png" alt="" srcset="" width={"45px"} />
            <img src="/github.png" alt="" srcset="" width={"45px"} />
            <img src="/whatsapp.png" alt="" srcset="" width={"45px"} />
          </div>
        </Col>
        <Col md={6} className="p-5">
          <Image src="/mine.png" alt="UI & UX Designer" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
