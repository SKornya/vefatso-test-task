import { FunctionComponent } from 'react';

import { notFound } from 'next/navigation';

import { fetchPost } from '@/lib/fetchPost';
import { getComments } from '@/lib/fetchComments';
import PostPageContainer from '@/components/news/PostPageContainer';

interface PageProps {
  params: { id: string };
}

const Page: FunctionComponent<PageProps> = async ({ params }) => {
  const { id } = params;
  const post = await fetchPost(Number(id));

  if (!post) return notFound();

  const fetchedComments = await getComments(Number(id));
  const comments = fetchedComments.kids;

  return <PostPageContainer post={post} initialComments={comments} />;
};

export default Page;
