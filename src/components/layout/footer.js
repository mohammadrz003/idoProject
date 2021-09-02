import React from "react";
import footerLogo from "../../img/bull-logo.png";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Footer = ({ darkMode, setDark }) => {
  const getLocalMode = window.localStorage.getItem("theme");
  const [enabled, setEnabled] = useState(
    getLocalMode === "dark" ? true : false
  );

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
            <a href="https://twitter.com/BullLaunchPad" target="_blank">
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
            </a>
            {/* telegram */}
            <a href="https://t.me/BullLaunchPad" target="_blank">
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
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </a>
            {/* group */}
            <a href="https://t.me/BullLaunchPadChat" target="_blank">
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
            {/* medium */}
            <a href="http://bulllaunchpad.medium.com" target="_blank">
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
                <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.684 18.9v.319H2.036V18.9l1.992-2.417a.971.971 0 0 0 .257-.833V7.269z"></path>
              </svg>
            </a>
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
