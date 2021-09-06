import React from "react";
import { PoolTitle } from "../style/cardStyle.style";
import styled from "styled-components";
import MobileProgressBar from "./homeProgressbar/mobile-progressBar";
import { mediaQueries } from "../../mediaQueries";

export const HomeIdoHeaderPercent = styled.p`
  background: rgb(14, 210, 247);
  background: #10b981;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IdoItem = styled.div`
  width: 100%;

  ${mediaQueries("lg")`
    width: calc(33.33% - 32px);
  `}
`;

const IdoCard = ({ useDarkMode }) => {
  let progress = "70";
  let { sale, total } = {
    sale: "54000",
    total: "68000",
  };

  let idoCartItem = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-gray-100 dark:bg-darkMode-600">
      <div className="container mx-auto py-24 xl:px-20 md:px-7 lg:py-24 flex flex-col">
        <div className="text-center">
          <PoolTitle
            useDarkMode={useDarkMode}
            className={`dark:text-white leading-none relative inline-block text-center font-bold text-secondery-300 text-3xl`}
          >
            <span className="relative z-10">Featured Pools</span>
          </PoolTitle>
        </div>
        <section className="mt-14 md:-m-4 space-y-8 md:space-y-0 flex flex-col flex-wrap md:flex-row md:justify-center px-4 sm:px-6">
          {/* card items go here */}
          {idoCartItem.map((item) => {
            return (
              <IdoItem
                className={`lg:m-4 bg-white transform lg:hover:scale-105 duration-300 rounded-3xl p-6 cursor-pointer border border-gray-300 dark:bg-darkMode-800 dark:border-gray-700 dark:hover:border-yellow-300 hover:border-primary-300`}
              >
                <div className="flex justify-between items-center">
                  <MobileProgressBar
                    darkMode={useDarkMode}
                    image={"/image/coins/dragon.jpg"}
                    percentage={"30"}
                    display={"inline-block"}
                  />
                  <div className="flex items-center bg-green-200 dark:bg-green-300 rounded-full px-2 py-1 space-x-1">
                    <span className="inline-block w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full" />
                    <span className="font-semibold text-green-500 dark:text-green-600 text-sm">
                      Filled
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-secondery-300 dark:text-darkMode-100 mt-2 text-2xl mb-0.5">
                  OpenOcean
                </p>
                <HomeIdoHeaderPercent
                  className="self-center text-white mt-1.5 font-bold text-lg"
                  darkMode={useDarkMode}
                >
                  {46}% <span className="font-medium text-sm">sold</span>
                </HomeIdoHeaderPercent>
                <p className="mt-4 font-semibold text-sm dark:text-white dark:text-opacity-80">
                  Ratio per 1 BNB
                </p>
                <div className="font-bold text-yellow-400 text-xl">
                  1816.67 FARA
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
              </IdoItem>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default IdoCard;
