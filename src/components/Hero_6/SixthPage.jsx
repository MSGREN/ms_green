

import MainComponent from "../InnerSlider/InnerSlider";

function SixthPage() { 
  return (
    <div className="bg-green-900 mt-0 px-10">
      <div className="px-5 py-5">
        <div>
          <article className="text-wrap py-10">
            <h1 className="font-bold text-6xl text-center text-lime-400">Roadmap</h1>
            <p className="text-center text-1xl text-white">
              Navigating the Candyland Adventure; 
              Whimsical Roadmap.
            </p>
          </article>
          
          <p className="text-center text-1xl font-thin text-white">Discover where the journey takes us, from 
            forging partnerships with fellow meme-makers 
            to the tempting possibilities of NFT 
            (Notable Flavorful Tokens) integration. .
          </p>
        </div>

        {/* SLider */}
        <div className="bg-green-950 ring-2 ring-lime-400 ml-40 mt-10 justify-between h-dvh w-3/5 p-5">
         <MainComponent />      
          
        </div>
      </div>
    </div>
  );
}

export default SixthPage;