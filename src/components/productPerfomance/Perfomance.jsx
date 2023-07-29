import React from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import { BiSearchAlt2 } from "react-icons/bi";
import { TextField } from "@mui/material";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import girlone from "../../assets/perfomanceAssets/girlone.jpeg";
import girltwo from "../../assets/perfomanceAssets/girltwo.jpeg";
import girlthree from "../../assets/perfomanceAssets/girlthree.jpeg";
import lineone from "../../assets/perfomanceAssets/color 1.png";
import linetwo from "../../assets/perfomanceAssets/color 2.png";
import linethree from "../../assets/perfomanceAssets/color 3.png";
import linefour from "../../assets/perfomanceAssets/color 4.png";
import graphone from "../../assets/perfomanceAssets/graph 1.png";
function Perfomance() {
  return (
    <div className=" w-full h-screen bg-gray-100">
      <div className=" w-full h-full flex">
        <Tab />
        <div className=" w-4/5 h-full bg-gray-100 px-5 py-5">
          <div className="w-full flex justify-between ">
            <h1 className=" text-4xl font-semibold">Product perfomance</h1>
            <div className="flex gap-4">
              <div className=" w-32 h-10 rounded-3xl bg-white flex items-center justify-center">
                <h1 className=" flex gap-2 items-center">
                  <SlCalender /> july 29
                </h1>
              </div>
              <div>
                <TextField
                  label={<BiSearchAlt2 />}
                  size="small"
                  fullWidth
                  InputProps={{
                    sx: { borderRadius: "50px", backgroundColor: "white" },
                  }}
                />
              </div>
              <div className=" w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <BsBell />
              </div>
              <div className=" w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <RiContactsLine />
              </div>
            </div>
          </div>
          <hr className=" border-black mt-5" />
          <div className=" mt-5 w-full h-auto flex gap-5">
            <div className=" w-2/5 bg-white h-[400px] rounded-xl shadow-lg px-5 py-5">
              <div className=" flex flex-col gap-8">
                <h1 className=" text-2xl">Low perfomance product</h1>
                <div className=" flex flex-col gap-3">
                  <div className=" flex  center gap-5 items-center">
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={girlone}
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" text-sm">Sheer Abaya</h1>
                      <h1 className=" text-red-500 text-xs">4 stock left</h1>
                    </div>
                  </div>
                  <div className=" flex  center gap-5 items-center">
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={girltwo}
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" text-sm">Sheer Abaya</h1>
                      <h1 className=" text-red-500 text-xs">4 stock left</h1>
                    </div>
                  </div>
                  <div className=" flex  center gap-5 items-center">
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={girlthree}
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" text-sm">Sheer Abaya</h1>
                      <h1 className=" text-red-500 text-xs">4 stock left</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-3/5 h-auto bg-white rounded-xl shadow-lg px-5 py-5">
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl">
                  Marketing on low perfomance product
                </h1>
                <div className=" flex flex-col gap-10">
                  <div className=" flex flex-col gap-1">
                    <div className=" flex justify-between">
                      <h1 className=" text-xs">Social Media</h1>
                      <h1 className=" text-xs">64%</h1>
                    </div>
                    <img src={lineone} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className=" flex justify-between">
                      <h1 className=" text-xs">Market place</h1>
                      <h1 className=" text-xs">40%</h1>
                    </div>
                    <img src={linetwo} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className=" flex justify-between">
                      <h1 className=" text-xs">Market place</h1>
                      <h1 className=" text-xs">40%</h1>
                    </div>
                    <img src={lineone} alt="" />
                  </div>

                  <div className=" flex flex-col gap-1">
                    <div className=" flex justify-between">
                      <h1 className=" text-xs">Digital Ads</h1>
                      <h1 className=" text-xs">80%</h1>
                    </div>
                    <img src={linefour} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-full flex gap-5">
            <div className=" w-3/5 h-auto rounded-2xl shadow-lg px-5 py-5 bg-white">
              <div className=" flex flex-col gap-3">
                <div className=" flex justify-between">
                  <h1 className=" text-2xl">Generate offers</h1>
                  <h1 className=" text-xs uppercase">ai generated</h1>
                </div>
                <div className=" w-full flex flex-wrap gap-4">
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Discounts
                  </div>
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Buy one get one free
                  </div>
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Bundle Deals
                  </div>
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Limited Time Offers
                  </div>
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Cross selling and upselling
                  </div>
                  <div className="px-2 py-2 w-auto h-auto bg-gray-100 shadow-lg rounded-md">
                    Flash Sales
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-2/5 px-5 py-5 h-auto bg-white rounded-xl shadow-lg">
              <div className=" flex flex-col gap-5">
                <h1 className=" text-xl">Customer</h1>
                <div className=" flex justify-between">
                  <div className=" flex flex-col">
                    <h1 className=" text-xs">Last saled</h1>
                    {/* <img src={graphone} alt="" /> */}
                    <h1 className=" text-3xl font-bold">24</h1>
                    <h1 className=" text-xs">5 days</h1>
                  </div>
                  <img src={graphone} alt="" width={100} />
                </div>
                <hr />
                <div className=" flex justify-between">
                  <div className=" flex flex-col">
                    <h1 className=" text-xs">Last saled</h1>
                    {/* <img src={graphone} alt="" /> */}
                    <h1 className=" text-3xl font-bold">28</h1>
                    <h1 className=" text-xs">1 month</h1>
                  </div>
                  <img src={graphone} alt="" width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfomance;
