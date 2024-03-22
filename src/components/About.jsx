import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import {motion} from "framer-motion"
import {icons} from "../assets/icons"
const About = () => {
  const divVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#A6E3E9",
      transition: { duration: 0.3 },
    },
  };
  return (
    <Container className='py-3'>
      
      <h3 className='display-6' style={{textAlign:"center"}}>About Me</h3>
      <Row>
        <Col xs={12} md={5}>
          <Image src="/images.jpeg" className='img-fluid'/>
        </Col>
        <Col>
        <Row className='gap-2 py-2'>
          <Col>
          <motion.div
            variants={divVariants}
            whileHover="hover"
            style={{
              textAlign:"center", 
              boxShadow:"3px 3px 7px grey",
              borderRadius:"10px"
            }}
            className='py-3'
          >
             {icons.experience}
              <div 
                className='d-flex justify-content-center flex-column pt-2'
                style={{textAlign:"center"}}
                >
                <h1 className='lead fw-normal fs-2'>Experience</h1>
                <h6 className='lead'>1.5 + Years</h6>
              </div>
           </motion.div>
          </Col>
          <Col>
          <motion.div
            variants={divVariants}
            whileHover="hover"
            style={{
              textAlign:"center", 
              boxShadow:"3px 3px 7px grey",
              borderRadius:"10px"
            }}
            className='py-3'
          >
              {icons.completed}
              <div 
                className='d-flex justify-content-center flex-column pt-2'
                style={{textAlign:"center"}}
              >
                <h1 className='lead fw-normal fs-2'>Completed</h1>
                <h6 className='lead'>5+ projects</h6>
              </div>
            </motion.div>
          </Col>
          <Col>
          <motion.div
            variants={divVariants}
            whileHover="hover"
            style={{
              textAlign:"center", 
              boxShadow:"3px 3px 7px grey",
              borderRadius:"10px"
            }}
            className='py-3'
          >
            {icons.support}
              <div 
                className='d-flex justify-content-center flex-column pt-2'
                style={{textAlign:"center"}}
              >
                <h1 className='lead fw-normal fs-2'>Support</h1>
                <h6 className='lead'>24/7 hours</h6>
              </div>
            </motion.div>  
          </Col>
        </Row>
        <Row>
          <p className='lead py-4'>
          Competent IT professional skilled in backend development, web design, and database management. Enthusiastic about creating server-side applications using Node.js and Spring Boot, and curious about exploring machine learning algorithms. Ready to learn, grow, and make valuable contributions.
          </p>
        </Row>
        <Button 
          variant='dark'
          style={{boxShadow:"3px 3px 6px grey"}}
        >Download CV
        </Button>

        </Col>
      </Row>
    </Container>
  )
}

export default About
