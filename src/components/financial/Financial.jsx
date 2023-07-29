import React from "react";
import Tab from "../sideTab/Tab";
import { BiSearchAlt2 } from "react-icons/bi";
import { TextField } from "@mui/material";
import { RiContactsLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import financial from "../../assets/marketing assets/finanical.webp";
function Financial() {
  return (
    <div className=" w-full flex ">
      <Tab />
      <div className=" w-full px-5 h-screen bg-gray-100">
        <div className="w-full flex justify-between pt-8 pb-5">
          <h1 className=" text-4xl font-semibold">Financial</h1>
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
        <hr className=" border-black" />
        <div className=" flex flex-col gap-1">
          <div className=" w-full px-5 flex justify-between">
            <div className="w-full flex justify-between items-center pt-8 pb-5">
              <h1 className=" text-3xl font-semibold">Payments</h1>
            </div>
            <div className=" flex justify-between pt-8 pb-5 gap-14">
              <div className=" flex flex-col ">
                <h1 className=" text-xs w-full">Overall balance</h1>
                <h1 className=" text-5xl font-extrabold">990,815</h1>
              </div>
              <div className=" flex flex-col ">
                <h1 className=" text-xs w-full">Monthly profits</h1>
                <h1 className=" text-5xl font-extrabold">990,815</h1>
              </div>
            </div>
          </div>
          <hr className=" border-black" />
        </div>
        <div className=" flex items-center w-full justify-center mt-3">
          <img src={financial} alt="" width={1100} />
        </div>
      </div>
    </div>
  );
}

export default Financial;
