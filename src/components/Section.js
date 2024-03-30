import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Section = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const handleSubmit = () => {};

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  return (
    <Container className="py-md-5 py-3 container-full-screen" id="contact">
      <h1 className="display-6 text-center">Contact Us</h1>
      <Row className="justify-content-center align-items-center ">
        <Col xs={12} md={6} className="py-md-3 py-sm-2 py-1">
          <motion.div
            whileHover={{ x: "-10px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 className="display-6 pb-3">Get in touch</h1>
            <p className="lead pb-2">
              Hi there, I'm eager to connect and explore how we can work
              together to bring your ideas to life. Feel free to contact me
              using the form, and let's start the conversation.
            </p>
            <div>
              <Image src="/whatsapp.svg" alt="whatsapp" className="me-3" />
              <Image src="/linkedin.svg" alt="linkedin" className="me-3" />
              <Image src="/github.svg" alt="github" className="me-3" />
              <Image src="/facebook.svg" alt="facebook" />
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className="py-md-3 py-sm-2 py-1">
          <motion.div
            whileHover={{ x: "10px" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form onSubmit={handleSubmit} className="py-3">
              <Form.Control
                type="text"
                className="mb-3"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <Form.Control
                type="email"
                value={formDetails.email}
                className="mb-3"
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <Form.Control
                as="textarea"
                rows="5"
                value={formDetails.message}
                placeholder="Message"
                className="mb-3"
                style={{
                  boxShadow: "3px 3px 7px grey",
                  borderRadius: "5px",
                }}
                onChange={(e) => onFormUpdate("message", e.target.value)}
              />
              <Button
                variant="dark"
                className="px-5"
                style={{
                  boxShadow: "3px 3px 7px grey",
                  textTransform: "uppercase",
                }}
              >
                Submit
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
