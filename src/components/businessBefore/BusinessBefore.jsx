import React, { useState } from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
} from "@mui/material";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import imgone from "../../assets/website assets/cone1.jpeg";
import imgtwo from "../../assets/website assets/cone2.png";
import imgthree from "../../assets/website assets/cone 3.png";
import imgfour from "../../assets/website assets/cone4.png";

function BusinessBefore() {
  const [business, setBusiness] = useState();
  return (
    <div>
      <div className=" w-full h-auto flex">
        <Tab />
        <div className=" w-full h-auto bg-gray-100 px-5">
          <div className="w-full flex justify-between pt-8 pb-5">
            <h1 className=" text-4xl font-semibold">Sales</h1>
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
          <div className=" w-full h-auto flex items-center mt-5  justify-between">
            <h1 className=" text-3xl"> Business before</h1>
            <h1 className=" text-sm w-[600px]">
              This is a pre-business planning feature that assists entrepreneurs
              before they start their business. It aims to help them conduct
              market research, identify competitors, and gather essential tips
              to set a strong foundation for their new venture.
            </h1>
          </div>
          <hr className=" border-black mt-5" />
          <div className=" flex flex-col gap-2 mt-2">
            <h1 className=" text-xl">Please enter your details</h1>
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <FormControl sx={{ width: "200px", boxShadow: "10px" }}>
                  <InputLabel size="small" id="demo-simple-select-label">
                    Business
                  </InputLabel>
                  <Select
                    sx={{ borderRadius: "10px" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={business}
                    label="Business"
                    onChange={(e) => setBusiness(e.target.value)}
                  >
                    <MenuItem value={"Restaurant "}>Restaurant</MenuItem>
                    <MenuItem value={"Textiles"}>Textiles</MenuItem>
                    <MenuItem value={"Gourmet Store"}>Gourmet Store</MenuItem>
                    <MenuItem value={"Abaya"}>Abaya</MenuItem>
                    <MenuItem value={"supermarket"}>Supermarket</MenuItem>
                    <MenuItem value={"Hypermarket"}>Hypermarket</MenuItem>
                    <MenuItem value={"Furniture"}>Furniture</MenuItem>
                    <MenuItem value={"Cafe"}>Cafe</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={3}>
                <TextField
                  size="small"
                  label="Business name"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  size="small"
                  label="Business location"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  size="small"
                  label="cuision"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
            </Grid>
          </div>
          <div className=" mt-5 w-full h-auto flex gap-5">
            <div className=" w-2/6 bg-white rounded-xl shadow-lg px-5 py-5 flex flex-col gap-4">
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-1     ">
                  <div className=" flex justify-between w-full items-center">
                    <div className=" flex flex-col gap-1 ">
                      <h1>Eeatery your second Home</h1>
                      <Rating
                        readOnly
                        value={3.5}
                        precision={0.5}
                        size="small"
                      />
                      <div className=" flex gap-3">
                        <h1 className=" text-xs">Dine-in,</h1>
                        <h1 className=" text-xs">Takeaway,</h1>
                        <h1 className=" text-xs">Delivery</h1>
                      </div>
                    </div>
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={imgone}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-400" />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-1     ">
                  <div className=" flex justify-between w-full items-center">
                    <div className=" flex flex-col gap-1 ">
                      <h1>Noura</h1>
                      <Rating
                        readOnly
                        value={4.5}
                        precision={0.5}
                        size="small"
                      />
                      <div className=" flex gap-3">
                        <h1 className=" text-xs">Dine-in,</h1>
                        <h1 className=" text-xs">Takeaway,</h1>
                        <h1 className=" text-xs">Delivery</h1>
                      </div>
                    </div>
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={imgtwo}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-400" />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-1     ">
                  <div className=" flex justify-between w-full items-center">
                    <div className=" flex flex-col gap-1 ">
                      <h1>Tamara Abaya</h1>
                      <Rating readOnly value={4} precision={0.5} size="small" />
                      <div className=" flex gap-3">
                        <h1 className=" text-xs">Dine-in,</h1>
                        <h1 className=" text-xs">Takeaway,</h1>
                        <h1 className=" text-xs">Delivery</h1>
                      </div>
                    </div>
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={imgthree}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-400" />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-1     ">
                  <div className=" flex justify-between w-full items-center">
                    <div className=" flex flex-col gap-1 ">
                      <h1>Diya</h1>
                      <Rating readOnly value={3} precision={0.5} size="small" />
                      <div className=" flex gap-3">
                        <h1 className=" text-xs">Dine-in,</h1>
                        <h1 className=" text-xs">Takeaway,</h1>
                        <h1 className=" text-xs">Delivery</h1>
                      </div>
                    </div>
                    <div className=" w-20 h-20 bg-black rounded-md">
                      <img
                        className=" w-full h-full object-cover"
                        src={imgthree}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* <hr className=" border-gray-400"/> */}
              </div>
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-1     ">  </div>
              </div>
            </div>
            <div className=" w-4/6 h-auto bg-white rounded-md px-5 py-5">
              <div className=" flex flex-col gap-4">
                <div className=" flex justify-between">
                  <h1 className=" text-2xl">Business Plan Master</h1>
                  <div className=" flex flex-col items-end gap-1">
                    <h1 className=" text-xs uppercase">ai generated</h1>
                    <GrPowerReset className=" text-blue-500" />
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" flex flex-col gap-1">
                    <h1 className=" font-bold">Marketing Analysis</h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Target Audience: Urban professionals, families, tourists
                      Market Trends: Identifying the growing demand for fusion
                      cuisine and healthy options.
                    </h1>
                  </div>
                  <hr className=" border-gray-400" />
                  <div className=" flex flex-col gap-1">
                    <h1 className=" font-bold">Concept and Menu Development</h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Concept: Creating a warm and welcoming ambiance with a
                      focus on farm-to-table ingredients and creative dishes.
                    </h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Menu: Designing a diverse menu featuring signature dishes,
                      vegan options, and indulgent desserts.
                    </h1>
                  </div>
                  <hr className=" border-gray-400" />
                  <div className=" flex flex-col gap-1">
                    <h1 className=" font-bold">Operational Plan</h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Staffing: Hiring skilled chefs, waitstaff, and kitchen
                      personnel.
                    </h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Supply Chain: Establishing partnerships with local
                      suppliers for fresh and high-quality ingredients.
                    </h1>
                  </div>
                  <hr className=" border-gray-400" />
                  <div className=" flex flex-col gap-1">
                    <h1 className=" font-bold">Risk Analysis</h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      dentifying potential risks and challenges, such as
                      competition, market fluctuations, and supply chain issues.
                    </h1>
                    <h1 className=" font-bold text-xs w-[600px]">
                      Developing risk mitigation strategies to minimize the
                      impact of potential challenges.
                    </h1>
                  </div>
                  <hr className=" border-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessBefore;
