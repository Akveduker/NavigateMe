const calcGameScore = (current: number, max: number) => {
  const percent = (Math.min(current, max) / Math.max(max, current)) * 100;
  return percent;
};
export default calcGameScore;
