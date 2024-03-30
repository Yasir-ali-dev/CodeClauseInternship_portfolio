import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./index.css";
const HeroSection = () => {
  return (
    <Container className="hero-section" id="hero">
      <Row className="align-items-center py-2">
        <Col xs={12} md={8} lg={6} className="mx-auto text-center">
          <h1 className="display-4">Hello I'M A MERN Stack Developer</h1>
          <p className="lead">
            Hi I'm Yasir Ali, a passionate Frontend and Backend developer.
            Welcome to portfolio world.
          </p>
          <div className="social-links gap-2 d-flex justify-content-center">
            <img src="/linkedin.png" alt="" srcset="" width={"45px"} />
            <img src="/github.png" alt="" srcset="" width={"45px"} />
            <img src="/whatsapp.png" alt="" srcset="" width={"45px"} />
          </div>
        </Col>
        <Col md={6}>
          <section className="home section " id="home">
            <div className="home__container container grid">
              <div className="home__content d-flex justify-content-center align-items-center">
                <div className="home__img "></div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
