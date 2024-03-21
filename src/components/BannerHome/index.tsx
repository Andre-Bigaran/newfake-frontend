// src/components/BannerHome/index.tsx
"use client";
import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;

const BannerHome: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "lightblue" }}
      >
        {/* Content inside banner (optional) */}
      </div>

      {/* Content below banner */}
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        {/* First column with banner */}
        <Col span={16}>
          <Card style={{ height: "200px", textAlign: "center" }}>
            {/* Banner content */}
            Banner 1
          </Card>
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
          <Card style={{ height: "200px", textAlign: "center" }}>
            {/* Banner content */}
            Banner 1
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "center" }}>
            {/* Banner content */}
            Banner 1
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: "200px", textAlign: "center" }}>
            {/* Banner content */}
            Banner 1
          </Card>
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
