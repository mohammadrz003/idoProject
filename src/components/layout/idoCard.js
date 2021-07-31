import React from "react";
import CardStyle from "../style/cardStyle.module.css";
import ProgressBar from "./progressBar";

const IdoCard = () => {
  let progress = "70";
  let { sale, total } = {
    sale: "54000",
    total: "68000",
  };
  let idoCartItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="dark:bg-darkMode-600">
      <div className="container mx-auto py-24 xl:px-20 md:px-7 lg:py-28 flex flex-col">
        <div className="text-center">
          <h2
            className={`dark:text-darkMode-100 leading-none relative inline-block text-center font-bold text-secondery-300 text-3xl ${CardStyle.poolTitle}`}
          >
            <span className="relative z-10">Featured Pools</span>
          </h2>
        </div>
        <section className="mt-14 grid px-4 gap-y-8 lg:grid-cols-3 lg:gap-11 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-y-12 sm:px-6">
          {/* card items go here */}
          {idoCartItem.map((item) => {
            return (
              <div
                className={`transform lg:hover:scale-105 duration-300 rounded-3xl p-6 cursor-pointer border border-gray-300 dark:bg-darkMode-900 dark:border-gray-700 dark:hover:border-yellow-300 hover:border-primary-300`}
              >
                <div className="flex justify-between items-center">
                  <img
                    className="h-12 w-auto"
                    src="https://imm.ltd/images/coin.svg"
                    alt=""
                  />
                  <div className="flex items-center bg-green-200 dark:bg-green-300 rounded-full px-2 py-1 space-x-1">
                    <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full" />
                    <span className="font-semibold text-green-500 dark:text-green-600 text-sm">
                      Filled
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-secondery-300 dark:text-darkMode-100 mt-4 text-2xl mb-0.5">
                  OpenOcean
                </p>
                <p className="font-semibold text-sm text-green-500">
                  BLP / BNB
                </p>
                <p className="mt-4 font-semibold text-sm dark:text-white dark:text-opacity-80">
                  Ratio per 1 BNB
                </p>
                <div className="font-bold text-yellow-400 text-xl">
                  1816.67 FARA
                </div>
                <p className="mt-4 mb-1 font-semibold text-sm dark:text-white dark:text-opacity-80">
                  Progress
                </p>

                {/*progress line*/}
                <ProgressBar progress={progress}/>

                <div className="flex justify-between">
                  <span className="font-medium text-sm dark:text-white dark:text-opacity-80">
                    {progress}%
                  </span>
                  <span className="font-medium text-sm text-green-500">
                    {sale} / {total}
                  </span>
                </div>
                <div className="flex flex-wrap justify-between mt-4 pt-4 border-t border-gray-300 dark:border-darkMode-500">
                  <p className="flex flex-col">
                    <span className="font-medium text-sm dark:text-white dark:text-opacity-80">
                      Participants
                    </span>
                    <span className="font-semibold text-base dark:text-darkMode-100">
                      71
                    </span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-medium text-sm dark:text-white dark:text-opacity-80">
                      Max BUSD
                    </span>
                    <span className="font-semibold text-base dark:text-darkMode-100">
                      100
                    </span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-medium text-sm dark:text-white dark:text-opacity-80">
                      Access
                    </span>
                    <span className="font-semibold text-base dark:text-darkMode-100">
                      BSL holders
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default IdoCard;
