import { FunctionComponent } from 'react';

import Link from 'next/link';

import { Card, Space, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import { FieldTimeOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';

import dateFormat from '@/lib/dateFormat';

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
      type="inner"
      title={
        <Link href={`/news/${id}`}>
          <Text strong>{title}</Text>
        </Link>
      }
      style={{
        margin: '10px 0',
      }}
      styles={{ title: { whiteSpace: 'normal' } }}
    >
      <Flex justify='space-between'>
        <Text>
          <UserOutlined /> <Text>{by}</Text>
        </Text>

        <Space size='small'>
          <Text>
            <StarOutlined /> {score}
          </Text>

          <Text>
            <FieldTimeOutlined /> {dateFormat(time)}
          </Text>
        </Space>
      </Flex>
    </Card>
  );
};

export default PostCard;
