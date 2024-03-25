import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { icons } from "../assets/icons";
const Services = () => {
  return (
    <Container>
      <Row>
        <h1 className="display-6">SERVICES</h1>
      </Row>
      <div className="d-flex justify-content-center gap-3 py-2 align-items-center">
        <motion.div
          className="d-flex flex-column py-4 px-3"
          style={{
            border: "none",
            backgroundImage:
              "linear-gradient(45deg, #E3FDFD 65%, #A6E3E9 120%)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "1px",
          }}
          whileHover={{
            scale: 0.9,
            backgroundImage:
              "linear-gradient(45deg, #A6E3E9 75%, #A6E3E9 140%)",
          }}
        >
          <div className="pb-2">{icons.frontend}</div>
          <div className="py-3">
            <h1 className="fs-4 fw-normal pb-1">FRONTEND DEVELOPMENT</h1>
            <h2 className="lead">
              Crafting innovative user experiences with cutting-edge React
              solutions
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="d-flex flex-column py-4 px-3"
          style={{
            border: "none",
            backgroundImage:
              "linear-gradient(45deg, #E3FDFD 65%, #A6E3E9 120%)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "1px",
          }}
          whileHover={{
            scale: 0.9,
            backgroundImage:
              "linear-gradient(45deg, #A6E3E9 75%, #A6E3E9 140%)",
          }}
        >
          <div className="pb-2">{icons.backend}</div>
          <div className="py-3">
            <h1 className="fs-4 fw-normal pb-1">SPRING BOOT DEVELOPMENT</h1>
            <h2 className="lead">
              Empowering your applications with robust back-end solutions using
              Spring Boot
            </h2>
          </div>
        </motion.div>
      </div>
      <div className="d-flex justify-content-center gap-3 py-2 align-items-center">
        <motion.div
          className="d-flex flex-column py-4 px-3"
          style={{
            border: "none",
            backgroundImage:
              "linear-gradient(45deg, #E3FDFD 65%, #A6E3E9 120%)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "1px",
          }}
          whileHover={{
            scale: 0.9,
            backgroundImage:
              "linear-gradient(45deg, #A6E3E9 75%, #A6E3E9 140%)",
          }}
        >
          <div className="pb-2">{icons.nodejs}</div>
          <div className="py-3">
            <h1 className="fs-4 fw-normal pb-1"> NODE-JS DEVELOPMENT</h1>
            <h2 className="lead">
              Transforming your projects with scalable and efficient Node.js
              solutions
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="d-flex flex-column py-4 px-3"
          style={{
            border: "none",
            backgroundImage:
              "linear-gradient(45deg, #E3FDFD 65%, #A6E3E9 120%)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "1px",
          }}
          whileHover={{
            scale: 0.9,
            backgroundImage:
              "linear-gradient(45deg, #A6E3E9 75%, #A6E3E9 140%)",
          }}
        >
          <div className="pb-2">{icons.android}</div>
          <div className="py-3">
            <h1 className="fs-4 fw-normal pb-1"> ANDROID DEVELOPMENT</h1>
            <h2 className="lead">
              Elevating your Android apps with sleek and dynamic UIs powered by
              Jetpack Compose
            </h2>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Services;
