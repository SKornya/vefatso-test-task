import { Post } from '@/lib/fetchPost';
import { FunctionComponent } from 'react';
import PostCard from './PostCard';
import { Spin } from 'antd';

interface PostsListProps {
  isLoading: boolean;
  news: string | null;
  page: number;
  pageSize: number;
}

const PostsList: FunctionComponent<PostsListProps> = ({
  isLoading,
  news,
  page,
  pageSize,
}) => {
  return (
    <>
      {news ? (
        JSON.parse(news)
          .slice((page - 1) * pageSize, page * pageSize)
          .sort((a: Post, b: Post) => a.time < b.time)
          .map(({ id, by, title, score, time }: Post) => {
            return (
              <PostCard
                key={id}
                id={id}
                by={by}
                title={title}
                score={score}
                time={time}
              />
            );
          })
      ) : (
        <Spin style={{ margin: '0 auto', display: 'block' }} />
      )}
    </>
  );
};

export default PostsList;
