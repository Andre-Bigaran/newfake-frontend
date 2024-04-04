"use client";
import React from "react";
import CarouselBanner from "./CarouselBanner";
import BannerContent from "./BannerContent";

const BannerHome: React.FC = () => {
  return (
    <div>
      <CarouselBanner />
      <BannerContent />
    </div>
  );
};

export default BannerHome;
