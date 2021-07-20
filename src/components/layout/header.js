import React from 'react';

const Header = () => {
    return (
        <div className="text-secondery-300 bg-secondery-200 sticky top-0 z-50">
            {/* wrapper */}
            <div className="container mx-auto xl:px-10">
                <div className="py-9">
                    <nav className="flex justify-between">
                        <div className="flex items-center space-x-3">
                            <svg
                                className="w-9"
                                id="Layer_1"
                                fill="#ffe000"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 73.93 76.21"
                            >
                                <polygon
                                    className="cls-1"
                                    points="57.48 76.21 73.93 41.77 54.43 0 42.79 24.36 31.02 0 15 34.05 19.39 42.95 31.07 19 43.02 43.16 54.54 18.04 65 41.57 53.04 67.39 57.48 76.21"
                                />
                                <polygon
                                    className="cls-1"
                                    points="54.54 32.98 58.98 40.27 43.02 75.14 31.07 50.88 19.34 75.14 0 33.63 15.27 0 20.14 7.43 8.79 33.09 19.5 57.09 31.02 32.13 42.96 56.34 54.54 32.98"
                                />
                            </svg>
                            <h1 className="uppercase text-white font-normal tracking-wide font-montserrat">
                                lorm launched
                            </h1>
                        </div>

                        <div className="flex space-x-8">
                            <ul className="flex font-semibold text-base space-x-7 text-light-100">
                                <li className="flex items-center">
                                    <a href="#">Home</a>
                                </li>
                                <li className="flex items-center">
                                    <a href="#">About</a>
                                </li>
                                <li className="flex items-center">
                                    <a href="#">FAQ</a>
                                </li>
                                <li className="flex items-center">
                                    <a href="#">Airdrop</a>
                                </li>
                                <li className="flex items-center">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>

                            <ul className="flex space-x-3">
                                <li className="flex items-center">
                                    <a
                                        className="text-sm border border-secondery-300 rounded-md leading-none py-3 px-4 bg-primary-300 text-secondery-200 font-bold"
                                        href="#"
                                    >
                                        Connect Wallet
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        className="text-sm border border-white text-white rounded-md leading-none py-3 px-4 font-bold"
                                        href="#"
                                    >
                                        Telegram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;