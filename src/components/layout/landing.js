import React from "react";
import circleText from "../../img/circle-text.png";

const Landing = () => {
  return (
    <div>
      <div className="landing-container container mx-auto lg:px-10 lg:py-20 grid grid-cols-13">
        <div className="flex flex-col items-center justify-center col-span-1">
          <span className="uppercase orient-text font-extrabold text-gray-300 text-base tracking-wider">
            next generation launchpad
          </span>
        </div>
        <header className="flex flex-col justify-center relative col-span-6">
          <img
            className="absolute top-5 -right-4 w-20 spin-animate"
            src={circleText}
            alt=""
          />
          <div className="font-medium">
            <h2 className="bull-header uppercase font-montserrat text-6xl relative inline-block mb-2">
              lorm
            </h2>
            <h2 className="uppercase font-montserrat text-6xl">launch pad</h2>
          </div>
          <p className="text-gray-600 font-medium text-lg my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nisi ad optio eius maxime ipsum sapiente quidem sit odio ut.
          </p>
          <div>
            <button className="flex content-center bg-secondery-200 text-white leading-none py-3.5 px-5 rounded-md font-semibold">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-2 animate-pulse"
                viewBox="0 0 20 20"
                fill="#ffe000"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>
        <div className="flex justify-end items-center col-span-6">
          <video
            id="my-video"
            className="video-js w-4/5 h-64 rounded-lg"
            controls
            preload="auto"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
          >
            <source src="videos/Northernlights2_HD.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Landing;
