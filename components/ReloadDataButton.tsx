'use client';

import React, { FunctionComponent } from "react";

import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Post } from "@/lib/fetchPost";

interface ReloadButtonProps {
  // handleClick: () => Promise<Post[]>;
  fetchData: (news: Post[]) => void;
}

const ReloadButton: FunctionComponent<ReloadButtonProps> = ({ fetchData }) => {
  return (
    <Button
        type="primary"
        onClick={fetchData}
      >
        <ReloadOutlined />
      </Button>
  );
};

export default ReloadButton;
