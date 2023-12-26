import React from 'react';

const ScoreClock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <circle
        cx="28"
        cy="28"
        r="27"
        fill="#fff"
        stroke="#D3BBFF"
        strokeWidth="2"
      />
      <path
        stroke="#D3BBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28 48c11.046 0 20-8.954 20-20S39.046 8 28 8 8 16.954 8 28s8.954 20 20 20z"
      />
      <path
        stroke="#D3BBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28 16v12l6 6"
      />
    </svg>
  );
};

export default ScoreClock;
