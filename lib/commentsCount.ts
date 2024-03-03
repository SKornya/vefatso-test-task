import { Post } from "./fetchPost";

const commentsCount = (comments: Post[] = []): number => {
  let count = comments.length;

  comments.forEach(comment => {
    if (comment.kids) {
      count += commentsCount(comment.kids);
    }
  });

  return count;
};

export default commentsCount;
