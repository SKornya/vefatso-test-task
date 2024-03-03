'use client';

import { FunctionComponent } from 'react';

import { Card } from 'antd';

import dateFormat from '@/lib/dateFormat';
import { Post } from '@/lib/fetchPost';
import createMarkup from '@/lib/createMarkup';

interface CommentProps {
  comment: Post;
}

const Comment: FunctionComponent<CommentProps> = ({ comment }) => {
  return (
    <Card
      type="inner"
      title={comment.by}
      styles={{ header: { whiteSpace: 'normal' } }}
    >
      <div dangerouslySetInnerHTML={createMarkup(comment.text || '')} />
    </Card>
  );
};

export default Comment;
