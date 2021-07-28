import React from "react";
// notify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// image
import rocketImg from "../../img/rocket-launchpad.jpg";
import NavBar from "../../components/layout/navBar";


const navigation = [
    {name: "Product", href: "#"},
    {name: "Features", href: "#"},
    {name: "Marketplace", href: "LandingSection#"},
    {name: "Company", href: "#"},
];

const ViewAllPools = ({darkMode, landingContainerWidth, navJustify}) => {

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
        <div className="relative bg-white dark:bg-darkMode-600 overflow-hidden">

            <div className="max-w-7xl mx-auto">
                <div
                    className={`relative z-10 pb-8 bg-white dark:bg-darkMode-600 sm:pb-16 ${landingContainerWidth} lg:pb-28 xl:pb-32`}>
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkMode-600 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>

                    <NavBar darkMode={darkMode} navigation={navigation}/>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline dark:text-white dark:text-opacity-95">View all pools for</span>{" "}
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

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src={rocketImg}
                    alt=""
                />
            </div>

            <ToastContainer/>
        </div>
    );
}

export default ViewAllPools;
