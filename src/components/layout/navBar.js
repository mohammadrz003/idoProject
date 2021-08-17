import React, { Fragment, useState } from "react";
import logoImgDark from "../../img/bull-logo.png";
import logoImg from "../../img/bull-logo-dark.png";
import landingCSS from "../style/landingPage.module.css";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import trustWalletImg from "../../img/TWT.png";
import metaMaskImg from "../../img/Metamask-logo-blanc.png";
import safepalImg from "../../img/safepal.png";
import coin98Img from "../../img/coin98.png";
import walletConnectImg from "../../img/walletconnect.png";
import { ModalBlackBackground } from "../../pages/PoolsDetail/style/JoinPoolModal.style";

const NavBar = ({ darkMode, navigation }) => {
  let [isOpen, setIsOpen] = useState(false);

  let [isShow, setIsShow] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function showModal() {
    setIsShow(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function removeModal() {
    setIsShow(false);
  }

  return (
    <>
      <ModalBlackBackground className={`${isOpen||isShow ? "inline" : "hidden"}`} />
      {/* opean wallet modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border divide-y-2 divide-gray-200 border-gray-700 w-full py-6 max-w-sm my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between px-6 mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900"
                  >
                    Choose wallet
                  </Dialog.Title>

                  <svg
                    onClick={closeModal}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x w-6 h-6 cursor-pointer"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="pt-3 px-6">
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <span className="tracking-wider text-blue-600">
                      TrustWallet
                    </span>
                    <img
                      className="h-9 rounded-full"
                      src={trustWalletImg}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <span className="tracking-wider text-blue-600">
                      Metamask
                    </span>
                    <img
                      className="h-9 rounded-full"
                      src={metaMaskImg}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <span className="tracking-wider text-blue-600">
                      Safepal
                    </span>
                    <img className="h-9 rounded-full" src={safepalImg} alt="" />
                  </div>
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <span className="tracking-wider text-blue-600">Coin98</span>
                    <img className="h-9 rounded-full" src={coin98Img} alt="" />
                  </div>
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <span className="tracking-wider text-blue-600">
                      Walletconnect
                    </span>
                    <img
                      className="h-9 rounded-full"
                      src={walletConnectImg}
                      alt=""
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* wallet account */}
      <Transition appear show={isShow} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={removeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border divide-y-2 divide-gray-200 border-gray-700 w-full py-6 max-w-sm my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between px-6 mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900"
                  >
                    Your wallet
                  </Dialog.Title>

                  <svg
                    onClick={removeModal}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x w-6 h-6 cursor-pointer"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="pt-3 px-6">
                  <div className="flex justify-between hover:opacity-70 items-center bg-gray-100 px-4 py-2 rounded-lg font-bold mt-2 cursor-pointer">
                    <p className="text-gray-700">
                      0xbdda50183d817c3289f895a4472eb475967dc980
                    </p>
                  </div>

                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      className="text-red-600 bg-red-100 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={removeModal}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Popover>
        {({ open }) => (
          <>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className={`relative flex items-center justify-between sm:h-10`}
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={darkMode === "dark" ? logoImgDark : logoImg}
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden space-x-4">
                      <button
                        onClick={openModal}
                        className={`${landingCSS.mobileConnectBtn} dark:text-primary-400 font-medium leading-none px-4 py-2 rounded-md`}
                      >
                        Connect
                      </button>
                      <Popover.Button className="bg-white dark:bg-darkMode-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon
                          className="h-6 w-6 dark:text-white dark:text-opacity-90"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 dark:text-white dark:text-opacity-80 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}

                  <a
                    onClick={showModal}
                    className="cursor-pointer font-medium text-indigo-600 dark:text-indigo-200 hover:text-indigo-500"
                  >
                    Accounts
                  </a>
                  <a
                    onClick={openModal}
                    className="cursor-pointer text-white font-medium bg-indigo-500 dark:bg-indigo-400 rounded-md leading-none px-4 py-2"
                  >
                    Connect
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-darkMode-500">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={darkMode === "dark" ? logoImgDark : logoImg}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white dark:bg-darkMode-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-darkMode-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-darkMode-100 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    onClick={showModal}
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 dark:bg-gray-700 dark:text-white dark:text-opacity-95 hover:bg-gray-100"
                  >
                    Account
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default NavBar;
