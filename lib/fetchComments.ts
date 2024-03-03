'use server';

const ITEM_API_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export const getComments = async (id: number) => {
  try {
    const response = await fetch(`${ITEM_API_URL}${id}.json`);

    if (!response.ok) {
      // throw new Error('fetch failed');
    }
    const data = await response.json();
    if (!data.kids) {
      return data;
    }

    const commentsPromises = data.kids.map((kid_id: number) => getComments(kid_id));
    const comments = await Promise.all(commentsPromises).then((results) => results.filter((result) => !result.deleted));
    return { ...data, kids: comments };
  } catch (e) {
    console.log(e);
    // throw new Error('reqest failed');
  }
};
