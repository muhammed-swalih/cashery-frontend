import React from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import { Rating, TextField } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import score from "../../assets/Bi assets/overallscore.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
function Bi() {
  return (
    <div className="">
      <div className=" w-full flex ">
        <Tab />
        <div className=" w-4/5 px-5 bg-gray-100 h-screen">
          <div className="w-full flex justify-between pt-8 pb-5">
            <h1 className=" text-4xl font-semibold">Business Intelligence</h1>
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
          <div className=" mt-5 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl">Competitor analysis</h1>
            </div>
            <div>
              <img className="" src={score} alt="" width={300} />
            </div>
          </div>
          <div className=" mt-5 flex w-full justify-center gap-5">
            <div className=" w-2/5 bg-white h-auto rounded-3xl shadow-lg px-5 py-5">
              <div className=" flex flex-col gap-5">
                <h1 className=" text-xl">Market Share Comparison</h1>
                <div className=" ml-5">
                  <ul className=" text-sm flex flex-col gap-2 list-disc">
                    <li>Diya Abaya: 29%</li>
                    <li>Noura Abaya: 25%</li>
                    <li>Elegant Abaya: 21%</li>
                    <li>Tamara Abaya: 29%</li>
                    <li>Mehar Abaya: 10%</li>
                  </ul>
                </div>
              </div>
              <div className=" mt-5 flex justify-between items-center">
                <h1 className=" text-xs text-gray-600">Need improvement!</h1>
                <div className=" w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
            <div className=" w-3/5 bg-white h-auto rounded-3x shadow-lg rounded-3xl px-5 py-5">
              <div className=" flex flex-col gap-5">
                <h1 className=" text-xl">Market Share Comparison</h1>
                <div className=" flex flex-col gap-4 text-sm">
                  <div className=" flex gap-6">
                    <h1>Diya abaya:</h1>
                    <h1 className=" text-green-500">competetive pricing</h1>
                  </div>
                  <div className=" flex gap-6">
                    <h1>Elegant abaya:</h1>
                    <h1 className=" ">Low pricing (5% cheaper)</h1>
                  </div>
                  <div className=" flex gap-6">
                    <h1>Tamara abaya:</h1>
                    <h1 className="">High pricing (10% more expensive)</h1>
                  </div>
                  <div className=" flex gap-6">
                    <h1>Meher abaya:</h1>
                    <h1 className=" text-green-500">Competetive pricing</h1>
                  </div>
                </div>
                <h1 className=" text-xs text-gray-700 mt-5">Avrage: 1</h1>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-full flex gap-5">
            <div className=" w-2/4 h-60 bg-white shadow-lg rounded-3xl px-5 py-5">
              <div className=" flex flex-col gap-5">
                <h1 className=" text-xl">Competetive intelligence</h1>
                <div className=" flex flex-col gap-2 ml-5">
                  <ul className=" text-sm list-disc flex flex-col gap-4">
                    <li>Diya abaya is planning a 20% off sales next week</li>
                    <li className=" w-5/6">
                      Elegant abaya is collaborating with a celibrity for
                      upcoming promotion event
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-1/4 h-60 bg-white shadow-lg px-5 py-5 rounded-3xl">
              <div className=" flex flex-col gap-5">
                <h1>Customer Reviews</h1>
                <div className=" ml-5 text-sm flex flex-col gap-3">
                  <div className=" flex gap-6">
                    <h1>Diya abaya</h1>
                    <Rating
                      defaultValue={4.8}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Noura abaya</h1>
                    <Rating
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Elagent abaya</h1>
                    <Rating
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Tamara abaya</h1>
                    <Rating
                      defaultValue={3}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Mehar abaya</h1>
                    <Rating
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/4 h-60 bg-white shadow-lg rounded-3xl ps-5 py-5">
              <div className=" flex flex-col gap-5">
                <h1>Product offering</h1>
                <div className=" ml-5 text-sm flex flex-col gap-3">
                  <div className=" flex gap-6">
                    <h1>Diya abaya</h1>
                    <Rating
                      defaultValue={4.8}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Noura abaya</h1>
                    <Rating
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Elagent abaya</h1>
                    <Rating
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Tamara abaya</h1>
                    <Rating
                      defaultValue={3}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                  <div className=" flex gap-6">
                    <h1>Mehar abaya</h1>
                    <Rating
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
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

export default Bi;
