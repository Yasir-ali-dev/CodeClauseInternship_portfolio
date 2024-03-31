import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./index.css";
const HeroSection = () => {
  return (
    <Container className="hero-section" id="hero">
      <Row className="align-items-center py-2">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <h1 className="display-4">Hello I'M A MERN Stack Developer</h1>
          <p className="lead pt-1">
            Hi I'm Yasir Ali, a passionate Frontend and Backend developer.
            Welcome to portfolio world.
          </p>
          <div className="social-links py-2 gap-2 d-flex justify-content-start">
            <a
              href="https://www.linkedin.com/in/yasir-ali-30ab09241"
              target="_blank"
            >
              <img src="/linkedin.png" alt="" srcset="" width={"45px"} />
            </a>
            <a href="https://github.com/Yasir-ali-dev" target="_blank">
              <img src="/github.png" alt="" srcset="" width={"45px"} />
            </a>
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
