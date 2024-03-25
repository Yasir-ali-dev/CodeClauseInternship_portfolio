import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const tech = [
  "/R.svg",
  "/node-js.svg",
  "/mongodb.svg",
  "/express.svg",
  "/JScript.svg",
  "/java.svg",
  "/git.svg",
  "/postman.svg",
];

const Skills = () => {
  return (
    <Container>
      <Row className="py-1">
        <Col>
          <hr />
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-md-5">
            {tech.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2, // Scale up on hover
                  rotate: 360, // Rotate 360 degrees on hover
                  borderRadius: "50%",
                }}
                transition={{ duration: 0.4 }} // Duration of the hover animation
                className="text-center"
              >
                <Image
                  key={index}
                  className="d-block mx-auto"
                  width="77px"
                  style={{ objectFit: "cover" }}
                  src={src}
                  alt={`tech-image-${index}`}
                  fluid
                />
              </motion.div>
            ))}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
