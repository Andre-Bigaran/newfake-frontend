"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import {
  message,
  Upload,
  Card,
  Row,
  Button,
  Col,
  Input,
  Tag,
  Timeline,
} from "antd";
import type { GetProp, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const UserProfile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleChange: UploadProps["onChange"] = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={5}>
          <Card span={6} style={{ display: "flex" }}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="avatar"
                  width={width}
                  height={height}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <div>
              <Button
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
              />
            </div>
            <div>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </Card>
        </Col>
        <Col span={10}>
          <Card span={6}>
            Nome
            <Input placeholder="Nome" />
            Sobrenome
            <Input placeholder="Sobrenome" />
            E-mail
            <Input placeholder="E-mail" />
            Senha
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
            Confirmação da senha
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </Card>
        </Col>
        <Col span={9}>
          <Card span={6}>
            <Timeline
              items={[
                {
                  children: "Create a services site 2015-09-01",
                },
                {
                  children: "Solve initial network problems 2015-09-01",
                },
                {
                  children: "Technical testing 2015-09-01",
                },
                {
                  children: "Network problems being solved 2015-09-01",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserProfile;
