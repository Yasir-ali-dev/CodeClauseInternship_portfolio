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
    <Container>
      <Row
        style={{
          padding: "115px 0 115px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Col className="py-3">
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
              <Image src="/whatsapp.svg" alt="whatsapp" />
              <Image src="/linkedin.svg" alt="linkedin" />
              <Image src="/github.svg" alt="github" />
              <Image src="/facebook.svg" alt="facebook" />
            </div>
          </motion.div>
        </Col>
        <Col>
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
              <textarea
                rows="5"
                value={formDetails.message}
                placeholder="Message"
                className="py-2 px-3 w-100"
                style={{
                  border: "none",
                  boxShadow: "3px 3px 7px grey",
                  borderRadius: "5px",
                }}
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <Button
                variant="dark"
                className="px-5 mt-3"
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
