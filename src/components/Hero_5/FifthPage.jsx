import React from "react";
import Tokenomics from "../../assets/tokenomics.png";

const FifthPage = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="mt-3 px-20 bg-green-900 ">
      <p className="font-extrabold text-[40px] text-center pt-8 text-green-400">Tokenomics</p>
      <div className="flex justify-between items-center gap-4 ">
        <div className="bg-white-800 mt-20 py-14 text-center md:text-left mx-52 md:mx-0">
          {/* Added text-center for mobile */}
          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full mb-10 col-span-1 md:ml-20"></div>
            <span className="text-green-600">Pre-sale</span>
          </div>

          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-orange-600 rounded-full mb-10 col-span-1 md:ml-20"></div>
            <span className="text-green-600">Liquidity Supply</span>
          </div>

          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full mb-10 col-span-1 md:ml-20"></div>
            <span className="text-green-600">Aggressive Marketing</span>
          </div>

          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full mb-10 col-span-1 md:ml-20"></div>
            <span className="text-green-600">Team 15 Month locked</span>
          </div>

          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-blue-300 rounded-full mb-10 col-span-1 md:ml-20"></div>
            <span className="text-green-600">Airdrop</span>
          </div>

          <div className="flex gap-4 ">
            <div className="flex items-center justify-center w-6 h-6 bg-green-300 rounded-full mb-10 col-span-1 md:ml-20"></div>
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
