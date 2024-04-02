import React, { useState } from "react";
import type { CarouselProps } from "antd";
import { Carousel, Image } from "antd";
import Container from "./styles";

type DotPosition = CarouselProps["dotPosition"];

const CarouselBanner: React.FC = () => {
  const [dotPosition] = useState<DotPosition>("left");

  return (
    <Container>
      <Carousel dotPosition={dotPosition} className="container-carousel">
        <div>
          <img
            className="content-banner"
            preview={false}
            src={"/images/plano-fundo.jpg"}
            alt="AndreBigaran"
          />
        </div>
        <div>
          <img
            className="content-banner"
            preview={false}
            src={"/images/plano-fundo.jpg"}
            alt="AndreBigaran"
          />
        </div>
        <div>
          <img
            className="content-banner"
            preview={false}
            src={"/images/plano-fundo.jpg"}
            alt="AndreBigaran"
          />
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselBanner;
