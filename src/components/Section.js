import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

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
      <Row>
        <Col>df</Col>
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
