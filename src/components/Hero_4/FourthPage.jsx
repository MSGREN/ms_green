import React from "react";

const FourthPage = () => {
  return (
    <div data-aos="zoom-in-up" className="flex flex-col mt-[650px] md:flex-row mb-16 px-10"> {/* Adjusted margin for better mobile view */}
      {/* Left Column */}
      <div className="md:flex-1">
        {/* Add your text here */}
        <p className="p-4 md:p-11 font-extrabold text-center md:text-left md:text-[40px]">
          Melt-Proof Security:
        </p>
      </div>

      {/* Green Line (Hidden on Mobile) */}
      <div className="hidden md:flex items-center justify-center h-[140px] w-1 bg-green-500 mr-8"></div>

      {/* Right Column */}
      <div className="md:flex-1">
        {/* Add your text here */}
        <p className="pb-4 font-extrabold text-center md:text-left text-[40px]">
          Your Crypto Candy Jar
        </p>

        <p className="text-center md:text-left">
          Rest assured, our blockchain wrapper keeps your Ms $Green <br /> token safe and sound. Our smart contracts are as solid as the <br /> shell of a candy-coated treat.
        </p>
      </div>
    </div>
  );
};

export default FourthPage;
