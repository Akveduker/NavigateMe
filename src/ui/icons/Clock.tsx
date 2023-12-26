import React from 'react';

const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <g filter="url(#filter0_i_570_4129)">
        <path
          fill="#fff"
          d="M28 51.333c12.887 0 23.333-10.447 23.333-23.333C51.333 15.113 40.887 4.666 28 4.666 15.113 4.666 4.667 15.113 4.667 28c0 12.886 10.446 23.333 23.333 23.333z"
        />
      </g>
      <path
        stroke="#E3D4FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M28 53.333c13.991 0 25.333-11.342 25.333-25.333C53.333 14.009 41.991 2.666 28 2.666 14.009 2.666 2.667 14.01 2.667 28S14.009 53.333 28 53.333z"
      />
      <g filter="url(#filter1_d_570_4129)" opacity="0.72">
        <path
          stroke="#AE7DFE"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M34.806 34.805L28 28V14.389"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_570_4129"
          width="58.667"
          height="58.666"
          x="-3.333"
          y="-3.333"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-4" dy="-6" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.541176 0 0 0 0 0.270588 0 0 0 0 0.662745 0 0 0 0.24 0" />
          <feBlend in2="shape" result="effect1_innerShadow_570_4129" />
        </filter>
        <filter
          id="filter1_d_570_4129"
          width="16.806"
          height="30.416"
          x="23"
          y="11.389"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.733333 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_570_4129"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_570_4129"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Clock;
