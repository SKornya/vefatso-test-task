'use client';

import { FunctionComponent } from 'react';

import { Card, Flex } from 'antd';
import Text from 'antd/es/typography/Text';

import dateFormat from '@/lib/dateFormat';
import { Post } from '@/lib/fetchPost';
import createMarkup from '@/lib/createMarkup';

interface CommentProps {
  comment: Post;
}

const Comment: FunctionComponent<CommentProps> = ({ comment }) => {
  const { by, text, time } = comment;

  return (
    <Card
      type="inner"
      title={
        <Flex justify="space-between">
          <Text>{by}</Text>{' '}
          <Text type="secondary">{dateFormat(time)}</Text>
        </Flex>
      }
      styles={{ header: { whiteSpace: 'normal' } }}
    >
      <div dangerouslySetInnerHTML={createMarkup(text || '')} />
    </Card>
  );
};

export default Comment;
