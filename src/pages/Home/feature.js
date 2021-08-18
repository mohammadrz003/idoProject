import React from 'react';
import securityImg from '../../img/security.png';
import securityImgDark from '../../img/security-dark.png';
import fastImg from '../../img/fast-time.png';
import fastImgDark from '../../img/fast-time-dark.png';
import experianceImg from '../../img/user.png';
import experianceImgDark from '../../img/user-dark.png';

const Feature = ({darkMode}) => {
    return (
        <section className="bg-light-100 dark:bg-darkMode-600">
            <div className="flex flex-col items-center space-y-8 px-4 sm:flex-row sm:justify-around container mx-auto xl:px-20 md:px-2 sm:px-4 py-20">
                <div className="flex flex-col max-w-xxs items-center lg:max-w-xxs md:max-w-xsm">
                    <img className="w-12" src={darkMode === "dark" ? securityImgDark : securityImg} alt="" />
                    <h5 className="font-bold text-lg mt-1 dark:text-darkMode-100">Good Security</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3 dark:text-white dark:text-opacity-70">We do our best to make sure we provide the most security for you</p>
                </div>
                <div className="flex flex-col max-w-xxs items-center lg:max-w-xxs md:max-w-xsm">
                    <img className="w-12" src={darkMode === "dark" ? fastImgDark : fastImg} alt="" />
                    <h5 className="font-bold text-lg mt-1 dark:text-darkMode-100">High Speed</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3 dark:text-white dark:text-opacity-70">We care about the speed of the site and we want you to reach your goal in the shortest time</p>
                </div>
                <div className="flex flex-col max-w-xxs items-center lg:max-w-xxs md:max-w-xsm">
                    <img className="w-12" src={darkMode === "dark" ? experianceImgDark : experianceImg} alt="" />
                    <h5 className="font-bold text-lg mt-1 dark:text-darkMode-100">Greate Experiance</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3 dark:text-white dark:text-opacity-70">The most important thing for us is a good user experience in working with the site</p>
                </div>
            </div>
        </section>
    );
};

export default Feature;