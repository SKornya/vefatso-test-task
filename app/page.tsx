import { FunctionComponent, useState } from 'react';

import Link from 'next/link';

import { Card, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import { UserOutlined, ReloadOutlined } from '@ant-design/icons';

import { Post } from '@/lib/fetchPost';
import { fetchData } from '@/lib/fetchData';
import PostCard from '@/components/PostCard';
import ReloadButton from '@/components/ReloadDataButton';

const reloadHandle = async (news: Post[]) => {
  'use server';
  news = await fetchData();
  // return news;
}

const POSTS_COUNT = 100;

const Home: FunctionComponent = async () => {
  let news: Post[] = await fetchData();

  return (
    <Card
      bordered={true}
      style={{
        width: '100%',
      }}
    >
      <ReloadButton fetchData={async () => {
        'use server';
        news = await fetchData();
      }} />

      <>
        {news &&
          Object.values(news.slice(0, POSTS_COUNT)).map(
            ({ id, by, title, score, time }: Post) => {
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
            }
          )}
      </>
    </Card>
  );
};

export default Home;
