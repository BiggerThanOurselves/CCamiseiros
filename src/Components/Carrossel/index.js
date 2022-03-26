import React, { useState } from "react";
import {Arrow} from "../../assets/arrow";
import { Container, LeftArrow, RightArrow, } from "./style";

export const Carrossel = ({ imgSrcs }) => {
  const [carrosselIndex, setCarrosselIndex] = useState(0); 

  const next = () => {
    if (carrosselIndex !== imgSrcs.length - 1) {
      setCarrosselIndex(carrosselIndex + 1);
    };
  };

  const previous = () => {
    if (carrosselIndex !== 0) {
      setCarrosselIndex(carrosselIndex - 1);
    };
  };

  const carrosselImages = imgSrcs.map((src) => <img src={src} alt='t-shirt postsc'/>)

  return (
    <Container>
      <LeftArrow first={carrosselIndex === 0} onClick={previous}>
        <Arrow />
      </LeftArrow>
      {carrosselImages[carrosselIndex]}
      <RightArrow last={carrosselIndex === imgSrcs.length -1} onClick={next}>
        <Arrow />
      </RightArrow>
   </Container>
  );
};

Carrossel.defaultProps = {
  imgSrcs: [],
}
