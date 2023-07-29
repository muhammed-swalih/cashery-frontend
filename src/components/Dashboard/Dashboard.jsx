import React from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import { TextField } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import roundone from "../../assets/dashboard assets/roundone.png";
import roundtwo from "../../assets/dashboard assets/roundtwo.png";
import roundthree from "../../assets/dashboard assets/roundthree.png";
import roundfour from "../../assets/dashboard assets/roundfour.png";
import activity from "../../assets/dashboard assets/new.png";
import lineone from "../../assets/dashboard assets/lineone.png";
import linetwo from "../../assets/dashboard assets/linetwo.png";
import linethree from "../../assets/dashboard assets/linethree.png";
import linefour from "../../assets/dashboard assets/linefour.png";

function Dashboard() {
  return (
    <div className="">
      <div className=" w-full h-screen flex ">
        <Tab />
        <div className=" w-4/5 h-screen bg-gray-100 px-5 pt-5">
          <div className="w-full flex justify-between pb-5">
            <h1 className=" text-4xl font-semibold">Sales</h1>
            <div className="flex gap-4">
              <div className=" w-32 rounded-3xl bg-white flex items-center justify-center">
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
          <hr className=" border-black" />
          <div className=" w-full h-auto py-5 items-center flex justify-center gap-5 ">
            <div className=" w-1/4 bg-white h-24 rounded-2xl shadow-lg px-3 py-3 flex items-center gap-7 justify-center">
              <div className="flex flex-col gap-1">
                <h1 className=" text-gray-400 text-xs">Total Sales</h1>
                <h1 className=" text-black font-extrabold text-2xl">6847</h1>
              </div>
              <div className=" ">
                <img src={roundone} alt="" width={70} />
              </div>
            </div>
            <div className=" w-1/4 bg-white h-24 rounded-2xl shadow-lg px-3 py-3 flex items-center gap-7 justify-center">
              <div className="flex flex-col gap-1">
                <h1 className=" text-gray-400 text-xs">properties for rent</h1>
                <h1 className=" text-black font-extrabold text-2xl">8,447</h1>
              </div>
              <div className=" ">
                <img src={roundtwo} alt="" width={80} />
              </div>
            </div>
            <div className=" w-1/4 bg-white h-24 rounded-2xl shadow-lg px-3 py-3 flex items-center gap-7 justify-center">
              <div className="flex flex-col gap-1">
                <h1 className=" text-gray-400 text-xs">Total customers</h1>
                <h1 className=" text-black font-extrabold text-2xl">4,847</h1>
              </div>
              <div className=" ">
                <img src={roundthree} alt="" width={90} />
              </div>
            </div>
            <div className=" w-1/4 bg-white h-24 rounded-2xl shadow-lg px-3 py-3 flex items-center gap-7 justify-center">
              <div className="flex flex-col gap-1">
                <h1 className=" text-gray-400 text-xs">Total City</h1>
                <h1 className=" text-black font-extrabold text-2xl">90</h1>
              </div>
              <div className=" ">
                <img src={roundfour} alt="" width={80} />
              </div>
            </div>
          </div>
          <hr className=" border-black" />
          <div className=" w-full h-auto flex mt-5 gap-5">
            <div className=" w-4/6 h-auto rounded-3xl shadow-lg bg-white">
              <img
                className=" w-full h-full object-cover"
                src={activity}
                alt=""
                width={500}
              />
            </div>
            <div className=" w-2/6 shadow-lg rounded-3xl px-5 py-5 bg-white ">
              <div className=" flex flex-col gap-3">
                <div className=" ">
                  <h1 className=" text-2xl">AI Digital Marketing</h1>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className=" flex flex-col">
                    <div className=" w-full flex justify-between items-center">
                      <h1 className=" text-xs">overall score</h1>
                      <h1 className=" text-xs">56%</h1>
                    </div>
                    <div>
                      <img src={lineone} alt="" />
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <div className=" w-full flex justify-between items-center">
                      <h1 className=" text-xs">SEO score</h1>
                      <h1 className=" text-xs">85%</h1>
                    </div>
                    <div>
                      <img src={linetwo} alt="" />
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <div className=" w-full flex justify-between items-center">
                      <h1 className=" text-xs">Google Ads</h1>
                      <h1 className=" text-xs">87%</h1>
                    </div>
                    <div>
                      <img src={linethree} alt="" />
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <div className=" w-full flex justify-between items-center">
                      <h1 className=" text-xs">Facebook Ads</h1>
                      <h1 className=" text-xs">68%</h1>
                    </div>
                    <div>
                      <img src={linefour} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-full flex gap-5">
            <div className=" w-2/6 bg-white shadow-lg h-auto px-5 py-5 rounded-2xl">
              <div className=" flex flex-col gap-3">
                <h1 className=" text-2xl">Competitor Analatics</h1>
                <div className="w-full flex flex-col ">
                  <div className=" flex justify-between">
                    <h1 className=" text-xs">overall score</h1>
                    <h1 className=" text-xs">56%</h1>
                  </div>
                  <div>
                    <img src={linefour} alt="" />
                  </div>
                </div>
                <h1>Competitors</h1>
                <div className="text-sm">
                  <h1>Diya abaya - Elegant Abaya</h1>
                  <h1>Tamara abaya - Mehar Abaya</h1>
                </div>
              </div>
            </div>
            <div className=" w-2/6 bg-white shadow-lg h-auto px-5 py-5 rounded-2xl">
              <div className=" flex flex-col gap-3">
                <h1 className=" text-2xl">Ecommerce website</h1>
                <div>
                  <h1 className=" text-sm">Orders completed </h1>
                  <h1 className=" font-bold">235</h1>
                </div>
                <div>
                  <h1 className=" text-orange-500 text-sm">order processing</h1>
                  <h1 className=" text-bold">2</h1>
                </div>
              </div>
            </div>
            <div className=" w-2/6 bg-white shadow-lg h-auto px-5 py-5 rounded-2xl">
              <div className=" flex flex-col gap-3">
                <div>
                  <h1 className=" font-bold">AI Coaching</h1>
                  <h1 className=" text-xs">improving tips</h1>
                </div>
                <div className=" ml-5">
                  <ul className=" list-disc text-sm">
                    <li>Customer Engagement</li>
                    <li>Abaya Customization</li>
                    <li>Exclusive Deals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
