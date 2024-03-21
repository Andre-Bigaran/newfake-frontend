// src/components/CompaniesCard/index.tsx
"use client";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import React from "react";
import { Row, Col, Card, Typography, Avatar, Space, Tag } from "antd";

const { Title, Text } = Typography;

const CompaniesCard: React.FC = () => {
  return (
    <div>
      {/* Content below banner */}
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        {/* First column with banner */}
        <Col span={24}>
          <Card>
            <Space align="center">
              <Avatar shape="square" size={120} icon={<UserOutlined />} />
              <div>
                <Title level={4}>Nome da Empresa</Title>
                <Text> Uma breve descrição a respeito da empresa</Text>
                <br />
                <Text>
                  <EnvironmentOutlined /> Cidade/Estado
                </Text>
                <br />

                <Text>
                  <Tag>Tag1</Tag>
                  <Tag>Tag2</Tag>
                  {/* Adicione mais tags conforme necessário */}
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
