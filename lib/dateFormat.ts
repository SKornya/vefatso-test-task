const dateFormat = (time: number): string => {
  const date = new Date(time * 1000);
  return date.toLocaleString('ru-Ru');
};

export default dateFormat;
