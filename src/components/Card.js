import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/Card.css";

function Card({ imageLink, imageDescp }) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="card"
      style={styles}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imageLink} alt="card img" className="cardImage" />
      <div className="imageDescpContainer">
        <p className="imageDescp">{imageDescp}</p>
      </div>
    </animated.div>
  );
}

export default Card;
