import { Spin } from "antd";
import React, { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="uk-flex uk-flex-center uk-margin uk-height-1-1">
      <Spin />
    </div>
  );
};

export default React.memo(Loading);
