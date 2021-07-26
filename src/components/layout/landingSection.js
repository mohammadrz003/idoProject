import { Fragment, useState } from "react";
import { Popover, Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import landingCSS from "../style/landingPage.module.css";
// notify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// image
import rocketImg from "../../img/rocket-launchpad.jpg";
import logoImg from "../../img/bull-logo-dark.png";
import trustWalletImg from "../../img/TWT.png";
import metaMaskImg from "../../img/Metamask-logo-blanc.png";
import safepalImg from "../../img/safepal.png";
import coin98Img from "../../img/coin98.png";
import walletConnectImg from "../../img/walletconnect.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function LandingSection() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // wallet account
  let [isShow, setIsShow] = useState(false);

  function removeModal() {
    setIsShow(false);
  }

  function showModal() {
    setIsShow(true);
  }

  const notify = () => {
    toast.error("please connect wallet");
  };
  const warningNotif = () => {
    toast.info("Not found");
  };
  const commingSoon = () => {
    toast.info("Comming soon");
  };

  return (
    <div className="relative bg-white dark:bg-darkMode-400 overflow-hidden">
      {/* opean wallet modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
          className="fixed inset-0 z-10 overflow-y-auto"
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

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-darkMode-400 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkMode-400 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img className="h-8 w-auto sm:h-10" src={logoImg} />
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
                            <MenuIcon className="h-6 w-6 dark:text-white dark:text-opacity-90" aria-hidden="true" />
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
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img className="h-8 w-auto" src={logoImg} alt="" />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        onClick={showModal}
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Account
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline dark:text-white dark:text-opacity-95">Best launchpad for</span>{" "}
                <span className="block text-primary-400 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-white dark:text-opacity-75 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                Egestas purus viverra
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow" onClick={commingSoon}>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-400 bg-secondery-300 dark:bg-darkMode-300 dark:text-secondery-300 md:py-4 md:text-lg md:px-10"
                  >
                    Apply project
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3" onClick={warningNotif}>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondery-300 bg-primary-400 dark:bg-darkMode-500 dark:text-white dark:text-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    View all pools
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={rocketImg}
          alt=""
        />
      </div>

      <ToastContainer />
    </div>
  );
}
