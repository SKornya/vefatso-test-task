'use server';

import { fetchPost } from './fetchPost';

interface IfetchData {
  (): Promise<string>;
}

const NEWSTORIES_API_URL =
  'https://hacker-news.firebaseio.com/v0/newstories.json';

export const fetchData: IfetchData = async () => {
  let data = '';
  try {
    const response = await fetch(NEWSTORIES_API_URL, {
      cache: 'no-store',
    });
    const ids: number[] = await response.json();
    const promises = ids.map(async (id: number) => {
      return await fetchPost(id);
    });

    data = JSON.stringify(
      await Promise.all(promises).then((results) =>
        results.filter((result) => result !== null)
      )
    );
  } catch (e) {
    console.log(e);
    return '';
  }

  return data;
}; 
