import React from "react";
import { ProgressFire, ProgressPercent } from "../style/cardStyle.style";
import rocketImg from "../../img/progress-rocket.svg";

const ProgressBar = ({ progress, display }) => {
  return (
    <div className="w-full h-2.5 rounded-md bg-gray-200 dark:bg-gray-700 relative">
      <span
        style={{ width: `${progress}%` }}
        className="absolute top-0 left-0 h-full rounded-md inline-block bg-gradient-to-r from-orange-500 to-orange-300"
      />
      <ProgressPercent style={{left: `${progress}%`}} className={`${display} absolute bottom-2 text-sm text-gray-300`}>{progress}%</ProgressPercent>

      <ProgressFire
        style={{ left: `${progress}%` }}
        className={`absolute z-50 top-0`}
        src={rocketImg}
      />
    </div>
  );
};

export default ProgressBar;
