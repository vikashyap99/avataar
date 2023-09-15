import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/Carousel.css";

function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);
  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      <div className="navigation">
        <ArrowBackIcon
          onClick={() => {
            let index =
              goToSlide === 0 ? props.cards.length - 1 : goToSlide - 1;
            setGoToSlide(index);
          }}
          className="navigationIcon"
        />
        {props.cards.map((item, index) => {
          return (
            <button
              key={item.key}
              className={`indicator ${goToSlide === index ? "active" : ""}`}
              onClick={() => {
                setGoToSlide(index);
              }}
            ></button>
          );
        })}
        <ArrowForwardIcon
          onClick={() => {
            setGoToSlide((prev) => (prev + 1) % props.cards.length);
          }}
          className="navigationIcon"
        />
      </div>
    </div>
  );
}
export default Carroussel;
