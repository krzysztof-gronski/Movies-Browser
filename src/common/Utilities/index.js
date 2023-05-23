export const formatDate = (dashSeparatorsReverseDate) => {
  return (
    dashSeparatorsReverseDate.slice(8) +
    "." +
    dashSeparatorsReverseDate.slice(5, 7) +
    "." +
    dashSeparatorsReverseDate.slice(0, 4)
  );
};
