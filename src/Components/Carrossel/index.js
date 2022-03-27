import React, { useState } from "react";
import { Arrow } from "../../assets/arrow";
import { Container, Image, LeftArrow, RightArrow } from "./style";

export const Carrossel = ({ imgSrcs }) => {
  const [carrosselIndex, setCarrosselIndex] = useState(0);

  const next = () => {
    if (carrosselIndex !== imgSrcs.length - 1) {
      setCarrosselIndex(carrosselIndex + 1);
    }
  };

  const previous = () => {
    if (carrosselIndex !== 0) {
      setCarrosselIndex(carrosselIndex - 1);
    }
  };

  return (
    <Container>
      <LeftArrow first={carrosselIndex === 0} onClick={previous}>
        <Arrow />
      </LeftArrow>
      {imgSrcs.map((src, index) => (
        <Image
          style={{ display: carrosselIndex === index ? "block" : "none" }}
          src={src}
          alt="t-shirt postsc"
        />
      ))}
      <RightArrow last={carrosselIndex === imgSrcs.length - 1} onClick={next}>
        <Arrow />
      </RightArrow>
    </Container>
  );
};

Carrossel.defaultProps = {
  imgSrcs: [],
};
