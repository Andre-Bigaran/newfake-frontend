// src/components/CompaniesCard/index.tsx
"use client";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import React from "react";
import { Row, Col, Card, Typography, Avatar, Space, Tag, Image } from "antd";

const { Title, Text } = Typography;

const CompaniesCard: React.FC = () => {
  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card>
            <Space align="center">
              <Image
                preview={false}
                src={"/images/unifil-logo.png"}
                width={120}
                className="logo pointer"
                alt="logo"
              />
              <div className="uk-margin-left">
                <Title level={4}>Centro Universitário Filadélfia</Title>
                <Text>
                  Instituição de ensino superior particular e confessional do
                  Brasilsa
                </Text>
                <br />
                <Text>
                  <EnvironmentOutlined /> Londrina - PR
                </Text>
                <br />

                <Text>
                  <Tag color="purple">Empresa</Tag>
                  <Tag color="magenta">Universidade</Tag>
                </Text>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompaniesCard;
