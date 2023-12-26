import React from 'react';

const StarEmpty = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="45"
      fill="none"
      viewBox="0 0 46 45"
    >
      <g filter="url(#filter0_dd_586_3218)">
        <path
          fill="#F3F7FE"
          d="M36.813 14.012l-8.926-1.297-3.99-8.09a1.119 1.119 0 00-.51-.509 1.13 1.13 0 00-1.508.51l-3.99 8.09-8.926 1.296a1.123 1.123 0 00-.623 1.92l6.459 6.296-1.526 8.891a1.124 1.124 0 001.63 1.185l7.985-4.197 7.984 4.197a1.123 1.123 0 001.631-1.185l-1.526-8.89 6.459-6.297c.175-.172.291-.397.327-.643a1.121 1.121 0 00-.95-1.277z"
        />
        <path
          stroke="#FFD600"
          d="M27.439 12.936l.116.236.26.038 8.925 1.297s0 0 0 0c.347.052.58.37.528.705h0v.006a.622.622 0 01-.182.356s0 0 0 0l-6.458 6.296-.188.184.045.26 1.525 8.89h0a.623.623 0 01-.51.72h0a.617.617 0 01-.393-.061l-.002-.001-7.984-4.198-.233-.122-.233.122-7.984 4.198h0a.624.624 0 01-.906-.657h0l1.526-8.892.045-.259-.188-.183-6.459-6.297h0a.627.627 0 01.344-1.066h.001l8.927-1.298.26-.038.116-.236 3.99-8.087s0 0 0 0a.63.63 0 01.839-.285h0a.62.62 0 01.282.283h0l3.99 8.09z"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_586_3218"
          width="45.776"
          height="44.434"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.721569 0 0 0 0 0 0 0 0 0.8 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_586_3218"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="effect1_dropShadow_586_3218"
            result="effect2_dropShadow_586_3218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_586_3218"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StarEmpty;
