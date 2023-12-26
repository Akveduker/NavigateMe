const checkIfTimeNatural = (time: number) => {
  if (time.toString().length === 1) return `0${time}`;
  return time;
};

export default checkIfTimeNatural;
