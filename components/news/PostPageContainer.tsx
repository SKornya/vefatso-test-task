'use client';

import { FunctionComponent, ReactNode, useState } from 'react';

import { Button, Card, Flex, Space, TreeDataNode } from 'antd';

import BackwardButton from './BackwardButton';
import Comments from './Comments';
import Comment from './Comment';

import {
  CommentOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Text from 'antd/es/typography/Text';

import commentsCount from '@/lib/commentsCount';
import { getComments } from '@/lib/fetchComments';
import dateFormat from '@/lib/dateFormat';
import { Post } from '@/lib/fetchPost';

interface PostPageContainerProps {
  post: Post;
  initialComments: Post[];
}

const PostPageContainer: FunctionComponent<PostPageContainerProps> = ({
  post,
  initialComments,
}) => {
  const [comments, setComments] = useState<Post[]>(initialComments);

  const { id, title, url, by, time } = post;

  const refreshComments = async (id: number) => {
    const fetchedData = await getComments(Number(id));
    setComments(fetchedData.kids);
  };

  const renderTreeNodes = (
    comments: Post[]
  ): { title: ReactNode; key: number; children: any }[] =>
    comments
      ? comments.map((comment, i) => ({
          title: <Comment comment={comment} />,
          key: comment.id,
          children: renderTreeNodes(comment.kids),
        }))
      : [];

  const treeComments: TreeDataNode[] = renderTreeNodes(comments);

  return (
    <Card>
      <BackwardButton />
      <Card
        type="inner"
        title={title}
        styles={{ title: { whiteSpace: 'normal' } }}
      >
        <Button
          target="blank"
          href={url}
          style={{
            marginBottom: '20px',
          }}
        >
          Open source
        </Button>
        <Flex justify="space-between">
          <Text type="secondary">
            <UserOutlined /> {by}
          </Text>

          <Space>
            <Text type="secondary">
              <CommentOutlined /> {commentsCount(comments)}
            </Text>

            <Text type="secondary">
              <FieldTimeOutlined /> {dateFormat(time)}
            </Text>
          </Space>
        </Flex>
      </Card>

      <Comments treeData={treeComments} refreshComments={() => {
        refreshComments(id)
      }} />
    </Card>
  );
};

export default PostPageContainer;
