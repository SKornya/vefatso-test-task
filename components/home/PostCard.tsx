import { FunctionComponent } from 'react';

import Link from 'next/link';

import { Card } from 'antd';
import Text from 'antd/es/typography/Text';
import {
  FieldTimeOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';

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
      styles={{ title: { whiteSpace: 'normal' }, body: { display: 'none'} }}
      actions={[
        <Text key="user">
          <UserOutlined /> <Text>{by}</Text>
        </Text>,
        <Text key="score">
          <StarOutlined /> {score}
        </Text>,
        <Text key="time">
          <FieldTimeOutlined /> {dateFormat(time)}
        </Text>,
      ]}
    >
    </Card>
  );
};

export default PostCard;
