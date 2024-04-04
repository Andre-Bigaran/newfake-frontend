import React, { useState } from "react";
import type { CarouselProps } from "antd";
import { Carousel } from "antd";
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
            src={"/images/banner1.webp"}
            alt="banner"
          />
        </div>
        <div>
          <img
            className="content-banner"
            src={"/images/banner2.webp"}
            alt="banner"
          />
        </div>
        <div>
          <img
            className="content-banner"
            src={"/images/banner3.webp"}
            alt="banner"
          />
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselBanner;
