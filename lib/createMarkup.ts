const createMarkup = (comment: string): { __html: string } => ({
  __html: comment,
});

export default createMarkup;
