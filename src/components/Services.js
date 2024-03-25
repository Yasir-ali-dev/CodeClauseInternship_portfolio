import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { icons } from "../assets/icons";
const Services = () => {
  return (
    <Container>
      <Row>
        <h1 className="display-6 text-center">SERVICES</h1>
      </Row>
      <Row className="py-2 py-md-4">
        <Col xs={12} md={6} className="py-2 py-md-0">
          <motion.div
            className="d-flex flex-column py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              boxShadow: "0 5px 7px rgba(0, 0, 0, 0.2)", // Initial shadow
              transition: "box-shadow 0.3s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2">{icons.frontend}</div>
            <div className="py-3">
              <h1 className="fs-4 fw-normal pb-1 text-center">
                FRONTEND DEVELOPMENT
              </h1>
              <h2 className="lead text-center">
                Crafting innovative user experiences with cutting-edge React
                solutions
              </h2>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className="py-2 py-md-0">
          <motion.div
            className="d-flex flex-column py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              boxShadow: "0 5px 7px rgba(0, 0, 0, 0.2)", // Initial shadow
              transition: "box-shadow 0.3s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2">{icons.backend}</div>
            <div className="py-3">
              <h1 className="fs-4 fw-normal pb-1 text-center">
                SPRING BOOT DEVELOPMENT
              </h1>
              <h2 className="lead text-center">
                Empowering your applications with robust back-end solutions
                using Spring Boot
              </h2>
            </div>
          </motion.div>
        </Col>
      </Row>
      <Row className="py-2 py-md-4">
        <Col xs={12} md={6} className="py-2 py-md-0">
          <motion.div
            className="d-flex flex-column py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              boxShadow: "0 5px 7px rgba(0, 0, 0, 0.2)", // Initial shadow
              transition: "box-shadow 0.3s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2">{icons.nodejs}</div>
            <div className="py-3">
              <h1 className="fs-4 fw-normal pb-1 text-center">
                NODE-JS DEVELOPMENT
              </h1>
              <h2 className="lead text-center">
                Transforming your projects with scalable and efficient Node.js
                solutions
              </h2>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className="py-2 py-md-0">
          <motion.div
            className="d-flex flex-column py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              boxShadow: "0 5px 7px rgba(0, 0, 0, 0.2)", // Initial shadow
              transition: "box-shadow 0.3s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2">{icons.android}</div>
            <div className="py-3">
              <h1 className="fs-4 fw-normal pb-1 text-center">
                ANDROID DEVELOPMENT
              </h1>
              <h2 className="lead text-center">
                Elevating your Android apps with sleek and dynamic UIs powered
                by Jetpack Compose
              </h2>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
