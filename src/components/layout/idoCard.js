import React from "react";
import CardStyle from "../style/cardStyle.module.css";

const IdoCard = () => {
  let progress = "70";
  let { sale, total } = {
    sale: "54000",
    total: "68000",
  };
  let idoCartItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container mx-auto lg:px-20 lg:py-28 flex flex-col">
      <div className="text-center">
        <h2
          className={`leading-none relative inline-block text-center font-bold text-secondery-300 text-3xl ${CardStyle.poolTitle}`}
        >
          Featured Pools
        </h2>
      </div>
      <section className="mt-12 grid grid-cols-3 gap-11">
        {/* card items go here */}
        {idoCartItem.map((item) => {
          return (
            <div
              className={`${CardStyle.idoCartItem} transform hover:scale-105 duration-300 rounded-3xl p-6 cursor-pointer border hover:border-primary-300`}
            >
              <div className="flex justify-between items-center">
                <img
                  className="h-12 w-auto"
                  src="https://imm.ltd/images/coin.svg"
                  alt=""
                />
                <div className="flex items-center bg-green-200 rounded-full px-2 py-1 space-x-1">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-semibold text-green-500 text-sm">
                    Filled
                  </span>
                </div>
              </div>
              <p className="font-semibold text-secondery-300 mt-4 text-2xl mb-0.5">
                OpenOcean
              </p>
              <p className="font-semibold text-sm text-green-500">BLP / BNB</p>
              <p className="mt-4 font-semibold text-sm">Ratio per 1 BNB</p>
              <div className="font-bold text-yellow-400 text-xl">
                1816.67 FARA
              </div>
              <p className="mt-4 mb-px font-semibold text-sm">Progress</p>
              <div className="w-full h-3.5 rounded-sm bg-gray-200 relative overflow-hidden">
                <span
                  style={{ width: `${progress}%` }}
                  className="absolute top-0 left-0 h-full inline-block bg-yellow-400"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-sm">{progress}%</span>
                <span className="font-medium text-sm text-green-500">
                  {sale} / {total}
                </span>
              </div>
              <div className="flex flex-wrap justify-between mt-4 pt-4 border-t border-gray-300">
                <p className="flex flex-col">
                  <span className="font-medium text-sm">Participants</span>
                  <span className="font-semibold text-base">71</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-medium text-sm">Max BUSD</span>
                  <span className="font-semibold text-base">100</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-medium text-sm">Access</span>
                  <span className="font-semibold text-base">BSL holders</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default IdoCard;
