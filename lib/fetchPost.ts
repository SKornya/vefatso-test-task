interface IfetchPost {
  (id: number): Promise<Post>;
}

export interface Post {
  id: number;
  by: string;
  kids: Array<number>;
  time: number;
  type: string;
  url?: string;
  title?: string;
  score?: number;
}

const ITEM_API_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export const fetchPost: IfetchPost = async (id) => {
  let data = [];
  try {
    const response = await fetch(`${ITEM_API_URL}${id}.json`, {
      cache: 'force-cache',
    });
    data = await response.json();
  } catch (e) {
    console.log(e);
  }

  return data;
};
