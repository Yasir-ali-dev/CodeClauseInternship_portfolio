import React from "react";
import { Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <Container>
      <h1 className="display-6 text-center my-3 py-2">My latest work</h1>
      <div className="d-flex justify-content-center align-items-center gap-3">
        {[1, 2].map((_, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down when tapped
              initial={{ opacity: 0, y: 50 }} // Initial
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} // Animation duration
            >
              <Card
                style={{
                  width: "28rem",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="/images.jpeg" />
                <Card.Body>
                  <Card.Title>The Student hostel</Card.Title>
                  <Card.Text>Frontend</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
