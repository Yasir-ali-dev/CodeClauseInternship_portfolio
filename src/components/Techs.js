import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
const Techs = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__img"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Techs;

/*

  const numberOfBubbles = 50;

  const generateRandomPosition = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
  };

  const bubbles = Array.from({ length: numberOfBubbles }).map((_, index) => {
    const size = Math.random() * 50 + 10;
    const position = generateRandomPosition();
    const duration = Math.random() * 10 + 5; 
    return (
      <motion.div
        key={index}
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "#f8fcfd",
          zIndex: 0,
          ...position,
        }}
        animate={{
          x: position.x + (Math.random() - 0.5) * 50, 
          y: position.y + (Math.random() - 0.5) * 50, 
          transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />
    );
  });
  return <>{bubbles}</>;
*/
