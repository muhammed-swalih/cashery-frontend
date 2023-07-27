import React from "react";
import Tab from "../sideTab/Tab";
import { BiSearchAlt2 } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { TextField } from "@mui/material";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import eclipse from "../../assets/marketing assets/eclipse.png";
import ellipse from "../../assets/marketing assets/Ellipse.png";
import google from "../../assets/marketing assets/google.webp";
import imageone from "../../assets/marketing assets/adone.webp";
import meta from "../../assets/marketing assets/meta.png";
import { GoArrowUpRight } from "react-icons/go";
import tick from "../../assets/marketing assets/tick.png";
import postertwo from "../../assets/marketing assets/postertwo.webp";
import posterthree from "../../assets/marketing assets/posterthree.webp";
import posterfour from "../../assets/marketing assets/posterfour.webp";
import loading from "../../assets/marketing assets/loading.png";
import { useNavigate } from "react-router-dom";
function Marketing() {
  const navigate = useNavigate();
  const handlePosterone = () => {
    navigate("/posterone");
  };

  const handlePosterTwo = () => {
    navigate("/postertwo");
  };

  const handlePosterThree = () => {
    navigate("/posterthree");
  };

  const handlePosterFour = () => {
    navigate("/posterfour");
  };
  return (
    <div className=" w-full flex">
      <Tab />
      <div className=" w-full px-5 h-screen">
        <div className="w-full flex justify-between pt-8 pb-5">
          <h1 className=" text-4xl font-semibold">Digital Marketing</h1>
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
        <div className=" w-full flex  justify-between mt-8">
          <h1 className=" text-2xl ">AI-powered Digital Strategies</h1>
          <div className=" flex gap-4 ">
            <div className=" w-40 h-9 bg-gray-200 rounded-3xl flex items-center justify-center">
              <h1 className=" flex items-center justify-center">
                Wallet : 4000
                <LiaRupeeSignSolid />
              </h1>
            </div>
            <div className=" h-20 w-auto bg-black rounded-3xl px-5 py-2 ">
              <div className=" flex items-center  justify-around">
                <div className=" flex flex-col justify-start">
                  <h1 className=" text-sm text-white">Overall Score</h1>
                  <h1 className=" text-2xl text-white">56%</h1>
                </div>
                <div className=" flex items-center ">
                  <img
                    className=" flex items-center"
                    src={eclipse}
                    alt=""
                    width={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 flex gap-4 justify-between">
          <div className=" w-1/2  h-48 bg-black rounded-3xl px-5 py-5">
            <div className=" text-4xl text-white">
              <h1>Ecommerce website</h1>
            </div>
            <div className=" flex gap-7 mt-5 text-white">
              <div className=" flex flex-col text-sm">
                <h2>Today Visitors:</h2>
                <h1 className=" text-lg">90</h1>
              </div>
              <div className=" flex flex-col text-sm">
                <h2>Today orders:</h2>
                <h1 className=" text-lg">2</h1>
              </div>
            </div>
            <div className="h-12 flex items-end">
              <h1 className=" text-sm text-green-500">Shiprocket Connected!</h1>
            </div>
          </div>
          <div className=" w-1/3  h-48 bg-[#484845] rounded-3xl px-5 py-5">
            <h1 className=" uppercase text-xs text-white float-right">
              ai generated
            </h1>
            <div className=" flex flex-col gap-5 h-full">
              <div className=" w-full h-full flex items-center justify-center gap-4">
                <div className="flex flex-col">
                  <h1 className=" text-5xl font-extrabold text-white">SEO</h1>
                  <h1 className=" text-white">score</h1>
                </div>
                <div>
                  <img src={ellipse} alt="" />
                </div>
              </div>
              <h1 className=" text-xs text-gray-200">Improving SEO score...</h1>
            </div>
          </div>
          <div className=" w-1/4  h-48 bg-[#C2C2C2] rounded-3xl px-5 py-5">
            <h1 className=" uppercase text-xs text-black float-right">
              ai generated
            </h1>
            <div className=" flex items-center justify-start">
              <div className=" flex flex-col gap-1 ">
                <img className=" mt-3" src={google} alt="" width={80} />
                <div className=" text-black">
                  <h1 className=" text-2xl font-extrabold">Google Ads</h1>
                  <h1 className=" text-xs text-gray-600">87% quality scores</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 h-[350px] rounded-3xl w-full  ">
          <div className=" w-full h-full flex justify-between gap-5 items-center">
            <div className=" w-3/4  h-full bg-[#363636] rounded-3xl px-5 py-5">
              <div className=" flex justify-between w-full">
                <div className=" flex flex-col">
                  <h1 className=" text-white text-2xl">Poster Schedule</h1>
                  <h1 className=" text-white text-sm">Social Media</h1>
                </div>
                <div className=" flex flex-col gap-2">
                  <h1 className=" text-xs uppercase text-white flex justify-end">
                    ai generated
                  </h1>
                  <div className=" w-40 h-6 text-xs flex items-center justify-center text-white border border-1 border-white rounded-3xl">
                    <h1>Social Media Visitors</h1>
                  </div>
                </div>
              </div>
              <div className=" mt-5 w-full h-60  bg-[#DCDCDC] flex justify-center items-center box-border px-2 py-2 rounded-lg gap-1">
                <div className=" flex flex-col w-48  h-full rounded-lg px-1 py-1 border-r border-1 border-black">
                  <div
                    onClick={handlePosterone}
                    className=" flex flex-col gap-1"
                  >
                    <div className=" w-full h-auto  flex justify-center px-1">
                      <div className=" flex flex-col">
                        <h1 className=" text-black text-xs">Auto upload on:</h1>
                        <h1 className=" text-black text-sm font-bold">
                          29 July
                        </h1>
                      </div>
                      <img className=" w-14 h-8" src={meta} alt="" width={80} />
                    </div>
                    <div className=" w-full flex justify-center mt-2">
                      <div className=" w-36 h-32 flex justify-center bg-white rounded-md border border-1 border-black">
                        <img
                          className="rounded-md w-full h-full object-cover flex justify-center"
                          src={imageone}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" mt-1  w-full ">
                      <div className="flex justify-between w-full items-center rounded-full px-2 ">
                        <div>
                          <img src={tick} alt="" width={75} />
                        </div>
                        <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GoArrowUpRight className=" text-2xl text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col w-48  h-full rounded-lg px-1 py-1 border-r border-1 border-black">
                  <div
                    onClick={handlePosterTwo}
                    className=" flex flex-col gap-1"
                  >
                    <div className=" w-full h-auto  flex justify-center px-1">
                      <div className=" flex flex-col">
                        <h1 className=" text-black text-xs">Auto upload on:</h1>
                        <h1 className=" text-black text-sm font-bold">
                          29 July
                        </h1>
                      </div>
                      <img className=" w-14 h-8" src={meta} alt="" width={80} />
                    </div>
                    <div className=" w-full flex justify-center mt-2">
                      <div className=" w-36 h-32 flex justify-center bg-white rounded-md border border-1 border-black">
                        <img
                          className="rounded-md w-full h-full object-cover flex justify-center"
                          src={postertwo}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" mt-1  w-full ">
                      <div className="flex justify-between w-full items-center rounded-full px-2 ">
                        <div>
                          <img src={tick} alt="" width={75} />
                        </div>
                        <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GoArrowUpRight className=" text-2xl text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col w-48  h-full rounded-lg px-1 py-1 border-r border-1 border-black">
                  <div
                    onClick={handlePosterThree}
                    className=" flex flex-col gap-1"
                  >
                    <div className=" w-full h-auto  flex justify-center px-1">
                      <div className=" flex flex-col">
                        <h1 className=" text-black text-xs">Auto upload on:</h1>
                        <h1 className=" text-black text-sm font-bold">
                          29 July
                        </h1>
                      </div>
                      <img className=" w-14 h-8" src={meta} alt="" width={80} />
                    </div>
                    <div className=" w-full flex justify-center mt-2">
                      <div className=" w-36 h-32 flex justify-center bg-white rounded-md border border-1 border-black">
                        <img
                          className="rounded-md w-full h-full object-cover flex justify-center"
                          src={posterthree}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" mt-1  w-full ">
                      <div className="flex justify-between w-full items-center rounded-full px-2 ">
                        <div>
                          <img src={tick} alt="" width={75} />
                        </div>
                        <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GoArrowUpRight className=" text-2xl text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col w-48  h-full rounded-lg px-1 py-1 ">
                  <div
                    onClick={handlePosterFour}
                    className=" flex flex-col gap-1"
                  >
                    <div className=" w-full h-auto  flex justify-center px-1">
                      <div className=" flex flex-col">
                        <h1 className=" text-black text-xs">Auto upload on:</h1>
                        <h1 className=" text-black text-sm font-bold">
                          29 July
                        </h1>
                      </div>
                      <img className=" w-14 h-8" src={meta} alt="" width={80} />
                    </div>
                    <div className=" w-full flex justify-center mt-2">
                      <div className=" w-36 h-32 flex justify-center bg-white rounded-md border border-1 border-black">
                        <img
                          className="rounded-md w-full h-full object-cover flex justify-center"
                          src={posterfour}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" mt-1  w-full ">
                      <div className="flex justify-between w-full items-center rounded-full px-2 ">
                        <div>
                          <img src={tick} alt="" width={75} />
                        </div>
                        <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GoArrowUpRight className=" text-2xl text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/4 flex h-full flex-col gap-5">
              <div className="h-48 w-full bg-[#C2C2C2] rounded-3xl px-5 py-5">
                <h1 className=" uppercase text-xs text-black float-right">
                  ai generated
                </h1>
                <div className=" flex items-center justify-start">
                  <div className=" flex flex-col gap-1 ">
                    <img
                      className=" mt-3 ml-[-40px]"
                      src={meta}
                      alt=""
                      width={200}
                    />
                    <div className=" text-black">
                      <h1 className=" text-xl font-extrabold">Facebook Ads</h1>
                      <h1 className=" text-xs text-gray-600">
                        87% quality scores
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full bg-[#C2C2C2] rounded-3xl px-5 py-2">
                <h1 className=" uppercase text-xs text-black float-right">
                  ai generated
                </h1>
                <div className=" flex w-full h-full justify-start">
                  <div className=" mt-3 flex flex-col w-full gap-2">
                    <h1 className=" text-lg w-full">Personalized campaigns</h1>
                    <h1 className=" text-xs w-full float-right">76%</h1>
                    <img src={loading} alt="" />
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

export default Marketing;
