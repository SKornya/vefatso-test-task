import { Post, fetchPost } from './fetchPost';

interface IfetchData {
  (): Promise<Post[]>;
}

const NEWSTORIES_API_URL =
  'https://hacker-news.firebaseio.com/v0/newstories.json';

export const fetchData: IfetchData = async () => {
  let data = [];
  try {
    const response = await fetch(NEWSTORIES_API_URL, {
      cache: 'no-store',
    });
    const ids = await response.json();
    const promises = ids.map(async (id: number) => {
      const post = await fetchPost(id);
      return post;
    });

    data = await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }

  return data;
};
