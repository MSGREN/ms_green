import React from "react";
import Tokenomics from "../../assets/tokenomics.png";

const FifthPage = () => {
  return (
    <div className="mt-3 w-full lg:px-20 sm:px-4 bg-green-900">
      <p className="font-extrabold text-[40px] text-center py-8 text-green-400">Tokenomics</p>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-4">
        <div className="flex flex-col gap-4 w-3/5 lg:w-1/2">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-yellow-600 rounded-full"></div>
            <span className="text-green-600">Pre-sale</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-orange-600 rounded-full"></div>
            <span className="text-green-600">Liquidity Supply</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-green-600">Aggressive Marketing</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-green-600">Team 15 Month locked</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-blue-300 rounded-full"></div>
            <span className="text-green-600">Airdrop</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-3 h-3 bg-green-300 rounded-full"></div>
            <span className="text-green-600">Community Reward</span>
          </div>
        </div>

        <div className="md:col-span-1 mx-4 md:mx-0 flex items-center justify-center">
          <img src={Tokenomics} width={800} height={750} />
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
