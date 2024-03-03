'use client';

import { FunctionComponent } from 'react';

import { Button, Card, Flex, Tree, TreeDataNode } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface CommentsProps {
  treeData: TreeDataNode[];
  refreshComments: () => void;
}

const Comments: FunctionComponent<CommentsProps> = ({ treeData, refreshComments }) => {
  const { DirectoryTree } = Tree;

  return (
    <Card
      size="small"
      title={
        <Flex justify="space-between">
          Comments{' '}
          <Button ghost size="small" type="primary" onClick={() => refreshComments()}>
            <ReloadOutlined />
          </Button>
        </Flex>
      }
      bordered={false}
    >
      <DirectoryTree selectable={false} icon={null} treeData={treeData} />
    </Card>
  );
};

export default Comments;
