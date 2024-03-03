'use client';

import { FunctionComponent } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from 'antd';

const BackwardButton: FunctionComponent = () => {
  const router = useRouter();

  return (
    <Button
      type="primary"
      ghost
      onClick={() => router.back()}
      style={{ marginBottom: '10px' }}
    >
      Back to news
    </Button>
  );
};

export default BackwardButton;
