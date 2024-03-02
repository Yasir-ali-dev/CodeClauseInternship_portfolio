import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
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
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % tech.length);
    }, 5500); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [tech.length]);

  const getImagesToDisplay = () => {
    return [
      ...tech.slice(startIndex, tech.length),
      ...tech.slice(0, startIndex),
    ].slice(0, tech.length);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center gap-5">
            {getImagesToDisplay().map((src, index) => (
              <Image
                key={index}
                className="d-block"
                width={"120px"}
                style={{ objectFit: "cover" }}
                src={src}
                alt={`tech-image-${index}`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
