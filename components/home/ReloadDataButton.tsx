'use client';

import React, { FunctionComponent } from 'react';

import { Button, Space } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface ReloadButtonProps {
  fetchData: () => void;
}

const ReloadButton: FunctionComponent<ReloadButtonProps> = ({ fetchData }) => {
  return (
    <Button type="primary" ghost onClick={() => fetchData()}>
      <Space>
        <ReloadOutlined /> Refresh data
      </Space>
    </Button>
  );
};

export default ReloadButton;
