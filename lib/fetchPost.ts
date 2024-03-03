'use server';

interface IfetchPost {
  (id: number): Promise<Post | null>;
}

export interface Post {
  id: number;
  by: string;
  kids: Array<Post>;
  time: number;
  type: string;
  url?: string;
  title?: string;
  text?: string;
  score?: number;
}

const ITEM_API_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export const fetchPost: IfetchPost = async (id) => {
  let data = null;
  try {
    const response = await fetch(`${ITEM_API_URL}${id}.json`, {
      cache: 'force-cache',
    });
    data = await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return data;
};
