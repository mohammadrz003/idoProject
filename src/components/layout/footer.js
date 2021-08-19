import React from "react";
import footerLogo from "../../img/bull-logo.png";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Footer = ({ darkMode, setDark }) => {
  const getLocalMode = window.localStorage.getItem("theme");
  const [enabled, setEnabled] = useState(getLocalMode === 'dark' ? true : false);

  return (
    <section className="bg-secondery-400 border-t-2 border-gray-800">
      <footer className="container mx-auto flex flex-col px-2 xl:px-20 py-12 lg:px-10 md:px-5 text-secondery-500 text-center">
        <div className="flex justify-center items-center space-x-2">
          <img className="w-12" src={footerLogo} alt="" />
          <h3 className="font-montserrat font-semibold text-base">
            BULL LAUNCHPAD
          </h3>
        </div>
        <ul className="flex justify-center mt-12 space-x-4 sm:space-x-12 text-sm font-medium">
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
        <div className="flex flex-col-reverse items-center space-y-reverse space-y-7 md:items-baseline md:grid md:grid-cols-3 mt-12">
          <div className="flex items-center space-x-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-moon w-7 h-7"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a1add1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            {/* <p className="font-medium">Dark Mode</p> */}
            <div onClick={setDark}>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-500"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </div>
          {/* <span className="inline-block text-sm text-center md:text-left">English</span> */}
          <div className="flex justify-center space-x-10">
            {/* twitter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a1add1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
            {/* github */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a1add1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            {/* facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a1add1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            {/* dribbble */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-dribbble w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a1add1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
              <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
              <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
            </svg>
          </div>
          <span className="inline-block text-sm text-center md:text-right">
            © 2021 bull-platform. All rights reserved
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
