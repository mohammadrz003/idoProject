import React from "react";
import { ProgressFire, ProgressPercent } from "../style/cardStyle.style";

const ProgressBar = ({ progress, display }) => {
  return (
    <div className="w-full h-2.5 rounded-md bg-gray-200 dark:bg-gray-700 relative">
      <span
        style={{ width: `${progress}%` }}
        className="absolute top-0 left-0 h-full rounded-md inline-block bg-gradient-to-r from-orange-500 to-orange-300"
      />
      <ProgressPercent style={{left: `${progress}%`}} className={`${display} absolute bottom-2 text-sm text-white`}>70%</ProgressPercent>

      <ProgressFire
        style={{ left: `${progress}%` }}
        className={`absolute z-50 top-0`}
        viewBox="0 0 58 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <circle
            cx="26.2086"
            cy="26.0735"
            r="8.5"
            transform="rotate(-94 26.2086 26.0735)"
            fill="#DA453D"
          ></circle>
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.3707 13.7772C41.5019 13.3485 46.8386 18.0578 47.2742 24.2861C47.7097 30.5144 43.0803 35.9205 36.949 36.3493C32.0761 36.69 27.6878 33.9229 23.4057 34.2078C24.5025 32.8772 25.7708 31.6979 27.1776 30.7007C22.533 29.0902 20.8248 26.0477 16.0408 24.0267C19.5461 21.2986 23.6963 19.5214 28.0897 18.8671C28.0897 18.8671 24.6671 18.0479 23.3056 15.2105C28.0979 15.4881 31.895 14.0203 35.3707 13.7772V13.7772Z"
          fill="url(#flame_paint0_linear)"
        ></path>
        <path
          opacity="0.5"
          d="M41.6659 19.335C44.5736 19.1769 47.0701 21.3813 47.2732 24.2861C47.4764 27.191 45.3109 29.7214 42.4096 29.9695C40.1137 30.13 37.7 28.9624 35.6824 29.0968C35.9409 28.2062 36.8365 27.5225 37.9664 26.7814C35.0873 26.3213 35.0181 25.043 32.5588 24.1638C34.2504 22.8692 36.286 22.1021 38.4112 21.9582C38.4112 21.9582 36.599 21.3695 35.7638 19.747C38.6608 19.8896 40.0286 19.4495 41.6659 19.335V19.335Z"
          fill="#FDD82E"
        ></path>
        <defs>
          <filter
            id="filter0_f"
            x="0.827028"
            y="0.691652"
            width="50.7638"
            height="50.7638"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="flame_paint0_linear"
            x1="8.94627"
            y1="42.3476"
            x2="51.0755"
            y2="39.4016"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EE8F00"></stop>
            <stop offset="1" stop-color="#D01F5C"></stop>
          </linearGradient>
        </defs>
      </ProgressFire>
    </div>
  );
};

export default ProgressBar;
