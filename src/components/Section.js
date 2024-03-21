import React, { useState } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
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
      <Row className="py-5">
        <Col className="py-3">
          <h3 className="display-6 pb-3">Let’s work together</h3>
          <p className="lead pb-2">
            Hi there, I'm eager to connect and explore how we can work together
            to bring your ideas to life. Feel free to contact me using the form,
            and let's start the conversation.
          </p>
          <div>
            <Image src="/whatsapp.svg" alt="whatsapp" />
            <Image src="/linkedin.svg" alt="linkedin" />
            <Image src="/github.svg" alt="github" />
            <Image src="/facebook.svg" alt="facebook" />
          </div>
        </Col>
        <Col>
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
