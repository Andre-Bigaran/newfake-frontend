"use client";

import React, { FC } from "react";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

interface PageContainerProps {
  children?: React.ReactNode;
  title?: string;
  headerItems?: React.ReactNode;
  loading?: boolean;
  backButton?: boolean;
  backRoute?: string | boolean;
  container?: string | null;
}

const PageContainer: FC<PageContainerProps> = ({
  children,
  title,
  headerItems,
  loading = false,
  backButton = false,
  backRoute = false,
  container = null,
}) => {
  const router = useRouter();

  return (
    <div
      className={`${container ? container : "uk-container"} uk-padding`}
      style={{ overflow: "initial", marginLeft: 250 }}
    >
      {!!title && (
        <>
          <div className={`uk-flex  uk-flex-between uk-flex-middle`}>
            <div
              className="uk-flex uk-flex-middle pointer"
              onClick={() => {
                if (backButton && !backRoute) {
                  router.back();
                } else if (backRoute) {
                  router.push(backRoute as string);
                }
              }}
            >
              {!!backButton && (
                <ArrowLeftCircle
                  className="uk-margin-small-right pointer"
                  size={22}
                />
              )}
              <h3 className="uk-margin-remove uk-text-bold">{title}</h3>
            </div>
            {loading ? <Spin size="small" /> : headerItems}
          </div>
          <hr className="uk-margin-bottom" />
        </>
      )}
      {loading ? (
        <div className="uk-flex uk-flex-center uk-margin-medium-top">
          <Spin size="large" />{" "}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default PageContainer;
