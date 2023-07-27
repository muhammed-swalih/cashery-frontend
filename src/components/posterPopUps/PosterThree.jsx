import React from "react";
import Tab from "../sideTab/Tab";
import posterOne from "../../assets/marketing assets/posterthree.webp";
function PosterThree() {
  return (
    <div>
      <div className=" flex ">
        <Tab />
        <div className=" w-full px-5 bg-gray-300 h-screen">
          <div className=" flex w-full h-full items-center justify-center">
            <div className=" w-5/6 h-4/5 bg-black rounded-2xl flex">
              <div className=" w-2/3 h-full bg-gray-400">
                <img
                  className=" w-full h-full object-cover"
                  src={posterOne}
                  alt=""
                />
              </div>
              <div className=" w-1/2 h-full bg-white px-10 py-10">
                <div className=" h-full w-full flex flex-col gap-10">
                  <h1 className=" uppercase text-xs">ai generated</h1>
                  <div className=" flex flex-col gap-3">
                    <h1 className=" font-semibold">Content</h1>
                    <h1 className=" text-xs">
                      🌙 Ramadan Sale Alert! 🛍️ Embrace the Spirit of Ramadan
                      with our Exclusive Abaya Collection! 🕌 🌟 Looking for the
                      perfect Abaya to shine this Ramadan? Look no further! Our
                      Ramadan Sale brings you an irresistible offer on our
                      stunning Abaya designs, specially curated to elevate your
                      style during this holy month.
                    </h1>
                    <h1 className=" text-xs">
                      🌹 Celebrate the essence of Ramadan with our elegantly
                      crafted Abayas that blend modesty and grace. 🧕 Whether
                      it's for Iftar gatherings or Taraweeh prayers, our Abayas
                      will make you stand out in every occasion.
                    </h1>
                    <h1 className=" text-xs">
                      🌜 Enjoy up to70% OFF on our entire Abaya range during
                      this blessed season. Don't miss the chance to own your
                      dream Abaya at an unbeatable price!
                    </h1>
                  </div>
                  <div className=" flex flex-col gap-3">
                    <h1 className=" font-semibold">Hashtags</h1>
                    <h1 className=" text-xs">
                      #RamadanAbayas #ElegantAbayas #ModestStyle #RamadanFashion
                      #AbayaLove #AbayaGoals #AbayaGlam #RamadanStyle
                      #DivineAbayas #AbayaChic #RamadanElegance
                      #AbayaInspiration #ModestFashion #AbayaPerfection
                      #RamadanGlow #StylishAbayas #AbayaEssentials
                      #RamadanVibes#ModestGlamour #AbayaEnvy
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterThree;
