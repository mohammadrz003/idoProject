import React from "react";
import roadmapCSS from "../../components/style/roadmap.module.css";

const Roadmap = () => {
  return (
    <div className="bg-secondery-400 dark:bg-darkMode-800 hidden sm:block">
      <div className="flex items-center container xl:px-10 mx-auto h-48">
        <ul className={`${roadmapCSS.timeLineUL} flex flex-col sm:flex-row sm:justify-around w-full`}>
          <li className="w-4/5 sm:w-1/5">
            <span className="relative w-4 h-4 rounded-full bg-red-500 main-ping-animate">
              <span className="animate-ping opacity-70 absolute top-0 w-full h-full bg-primary-300 rounded-full" />
              <span
                className={`${roadmapCSS.checkedRoadmap} absolute top-0 w-full h-full bg-primary-300 rounded-full`}
              />
            </span>
          </li>
          <li className="w-4/5 sm:w-1/5">
            <span className="relative w-3 h-3 rounded-full bg-red-500">
              <span className="animate-ping opacity-70 absolute top-0 w-full h-full bg-light-100 rounded-full" />
              <span className="absolute top-0 w-full h-full bg-light-100 rounded-full" />
            </span>
          </li>
          <li className="w-4/5 sm:w-1/5">
            <span className="relative w-3 h-3 rounded-full bg-red-500">
              <span className="animate-ping opacity-70 absolute top-0 w-full h-full bg-light-100 rounded-full" />
              <span className="absolute top-0 w-full h-full bg-light-100 rounded-full" />
            </span>
          </li>
          <li className="w-4/5 sm:w-1/5">
            <span className="relative w-3 h-3 rounded-full bg-red-500">
              <span className="animate-ping opacity-70 absolute top-0 w-full h-full bg-light-100 rounded-full" />
              <span className="absolute top-0 w-full h-full bg-light-100 rounded-full" />
            </span>
          </li>
          <li className="w-4/5 sm:w-1/5">
            <span className="relative w-3 h-3 rounded-full bg-red-500">
              <span className="animate-ping opacity-70 absolute top-0 w-full h-full bg-light-100 rounded-full" />
              <span className="absolute top-0 w-full h-full bg-light-100 rounded-full" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
