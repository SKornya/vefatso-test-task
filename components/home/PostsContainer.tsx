'use client';

import { Card, Flex, Pagination } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import ReloadButton from './ReloadDataButton';

import { fetchData } from '@/lib/fetchData';
import PostsList from './PostsList';

// убрал для реализации пагинации всех данных
// const POSTS_COUNT = 100;
// const POSTS_PER_PAGE = 10;
const REFRESH_DELAY = 60000;

const Posts: FunctionComponent = () => {
  const [news, setNews] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // состояния для пагинации
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  // получение данных на сервере
  const getData = async () => {
    setIsLoading(true);
    const news = await fetchData();
    setNews(news);
    setIsLoading(false);
  };

  // инициализируем данные
  useEffect(() => {
    getData();

    const interval: NodeJS.Timeout = setInterval(() => {
      getData();
    }, REFRESH_DELAY);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card
      bordered={true}
      style={{
        width: '100%',
      }}
    >
      <ReloadButton
        fetchData={() => {
          setNews(null);
          getData();
        }}
      />

      <PostsList
        isLoading={isLoading}
        news={news}
        page={page}
        pageSize={pageSize}
      />

      <Flex justify="end">
        <Pagination
          hideOnSinglePage
          defaultCurrent={1}
          total={news ? JSON.parse(news).length : 1}
          onChange={(page) => {
            setPage(page);
            scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          onShowSizeChange={(_, size) => {
            setPageSize(size);
          }}
        />
      </Flex>
    </Card>
  );
};

export default Posts;
