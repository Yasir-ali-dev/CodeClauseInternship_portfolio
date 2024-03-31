import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import {motion} from "framer-motion"
import {icons} from "../assets/icons"
import "./index.css"
const About = () => {
  const divVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#E3FDFD",
      transition: { duration: 0.3 },
    },
  };
  return (
  <Container className="py-3 about" id='about'>
    <h3 className="display-6 text-center mb-3 py-1">About Me</h3>
    <Row className="align-items-center">
      <Col xs={12} md={5} className="mb-3">
        <Image src="/mine.png" className="img-fluid" rounded 
        style={{
          boxShadow:"3px 3px 7px grey"
        }}
      />
      </Col>
      <Col>
        <Row className="gap-2 py-2">
          <Col>
            <motion.div
              variants={divVariants}
              whileHover="hover"
              style={{
                textAlign: "center",
                boxShadow: "3px 3px 7px grey",
                borderRadius: "10px",
              }}
              className="py-3"
            >
              <span className="lead">{icons.experience}</span>
              <div className="d-flex justify-content-center flex-column pt-2">
                <h1 className="lead fw-normal fs-2">Experience</h1>
                <h6 className="lead">1.5 + Years</h6>
              </div>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              variants={divVariants}
              whileHover="hover"
              style={{
                textAlign: "center",
                boxShadow: "3px 3px 7px grey",
                borderRadius: "10px",
              }}
              className="py-3"
            >
              <span className="lead">{icons.completed}</span>
              <div className="d-flex justify-content-center flex-column pt-2">
                <h1 className="lead fw-normal fs-2">Completed</h1>
                <h6 className="lead">5+ projects</h6>
              </div>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              variants={divVariants}
              whileHover="hover"
              style={{
                textAlign: "center",
                boxShadow: "3px 3px 7px grey",
                borderRadius: "10px",
              }}
              className="py-3"
            >
              <span className="lead">{icons.support}</span>
              <div className="d-flex justify-content-center flex-column pt-2">
                <h1 className="lead fw-normal fs-2">Support</h1>
                <h6 className="lead">24/7 hours</h6>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row className="py-4">
          <p className="lead">
            Competent IT professional skilled in backend development, web design, and database management. Enthusiastic about creating server-side applications using Node.js and Spring Boot, and curious about exploring machine learning algorithms. Ready to learn, grow, and make valuable contributions.
          </p>
        </Row>
        <a href="/resume.pdf" download>
          <Button variant="dark" style={{ boxShadow: "3px 3px 6px grey", width:"150px" }}>
            Download CV
          </Button>
        </a>
      </Col>
    </Row>
  </Container>
  )
}

export default About
