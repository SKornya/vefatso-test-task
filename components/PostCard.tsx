import { FunctionComponent } from 'react';

import Link from 'next/link';

import { Card, Space, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import { UserOutlined } from '@ant-design/icons';

const dateTransform = (time: number): string => {
  const date = new Date(time);
  // const time = date.getDate();
  return date.toString();
};

interface PostCardProps {
  id: number;
  by: string;
  time: number;
  score?: number;
  title?: string;
}

const PostCard: FunctionComponent<PostCardProps> = ({
  id,
  title,
  by,
  score,
  time,
}) => {
  return (
    <Card
      title={
        <Link href={`/news/${id}`}>
          <Text strong>{title}</Text>
        </Link>
      }
      style={{
        margin: '10px 0',
      }}
    >
      <Flex justify="space-between">
        <Space>
          <UserOutlined />
          <Text>{by}</Text>
        </Space>

        <Space>
          {score}
          {dateTransform(time)}
        </Space>
      </Flex>
    </Card>
  );
};

export default PostCard;
