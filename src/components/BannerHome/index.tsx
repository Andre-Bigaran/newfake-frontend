// src/components/BannerHome/index.tsx
"use client";
import React from "react";
import { Row, Col, Card, Typography } from "antd";
import CarouselBanner from "./CarouselBanner";

const { Title, Text } = Typography;

const BannerHome: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <CarouselBanner />

      {/* Content below banner */}
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        {/* First column with banner */}
        <Col span={16}>
          <CarouselBanner />
        </Col>

        {/* Second column with title, description, user, and date */}
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "left" }}>
            {/* Content */}
            <Title level={4}>Title</Title>
            <Text>Description</Text>
            <br />
            <Text>User</Text>
            <br />
            <Text>Date</Text>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col span={8}>
          <CarouselBanner />
        </Col>
        <Col span={8}>
          <CarouselBanner />
        </Col>
        <Col span={8}>
          <CarouselBanner />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "left" }}>
            {/* Content */}
            <Title level={4}>Title</Title>
            <Text>Description</Text>
            <br />
            <Text>User</Text>
            <br />
            <Text>Date</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "center" }}>
            {/* Content */}left
            <Title level={4}>Title</Title>
            <Text>Description</Text>
            <br />
            <Text>User</Text>
            <br />
            <Text>Date</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "left" }}>
            {/* Content */}
            <Title level={4}>Title</Title>
            <Text>Description</Text>
            <br />
            <Text>User</Text>
            <br />
            <Text>Date</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BannerHome;
