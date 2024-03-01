import { FunctionComponent } from 'react';

import Link from 'next/link';

import { Card } from 'antd';

import { Post } from '@/lib/fetchPost';
import { fetchData } from '@/lib/fetchData';

const Home: FunctionComponent = async () => {
  let news = await fetchData();

  return (
    <Card
      bordered={true}
      style={{
        width: '100%',
      }}
    >
      {Object.values(news.slice(0, 100)).map((item: Post) => {
        return (
          <Card key={item.id}>
            <Link href={`/news/${item.id}`}>{item.title}</Link>
            
          </Card>
        );
      })}
    </Card>
  );
};

export default Home;
