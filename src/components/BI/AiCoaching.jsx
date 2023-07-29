import React, { useState } from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import { Button, TextField } from "@mui/material";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import tone from "../../assets/Bi assets/oneimg.png";
import ttwo from "../../assets/Bi assets/twoimg.png";
import tthree from "../../assets/Bi assets/threeimg.png";
import { IoMdAnalytics } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import trendone from "../../assets/Bi assets/aefb0d_edb8d859161f4df6b6671df300f43e46~mv2.jpg";

function AiCoaching() {
  const navigate = useNavigate();
  const [customizations, setCustomizations] = useState([
    {
      title: "Abaya Customization",
      content:
        "Offer customization options to cater to individual preferences. Allow customers to choose fabrics, colors, and design elements to create personalized abayas.",
    },
  ]);

  const [engagement, setEngagement] = useState([
    {
      title: "Customer Engagement ",
      content: `Engage with your customers in a warm and welcoming manner
        Greet them with a smile, offer assistance, and be
        attentive to their needs. Provide personalized styling
        advice to help them find the perfect abaya that suits
        their preferences and body type.`,
    },
  ]);

  const handleButtonClick = () => {
    // Define an array of different titles and contents
    const differentCustomizations = [
      {
        title: "Demand Prediction:",
        content:
          " Uses machine learning algorithms to predict demand for specific abaya styles and sizes based on historical sales data and current fashion trends.",
      },
      {
        title: "Loyalty and Retention",
        content:
          "Congratulations! With your recent purchase, you've unlocked our 'Preferred Customer' status. This entitles you to free shipping on all future orders and exclusive access to our upcoming sales.",
      },
      {
        title: "Chatbot for Frequently Asked Questions",
        content:
          " Collects and analyzes customer inquiries to identify common questions and pain points, allowing the shop owner to improve customer service and optimize store operations",
      },
      {
        title: "AI-Powered Product Recommendations",
        content:
          "Analyzes the customer's selected abaya and compares it with past customer data to suggest the most popular and relevant accessory combinations.",
      },
      {
        title: "User Feedback and Satisfaction Surveys",
        content:
          " Collects and analyzes customer feedback to identify areas for improvement, measure customer satisfaction, and refine the AI coaching algorithms",
      },
    ];

    const randomIndex = Math.floor(
      Math.random() * differentCustomizations.length
    );
    const randomCustomization = differentCustomizations[randomIndex];

    setCustomizations([...customizations, randomCustomization]);
  };
  const handleButtonClickOne = () => {
    // Define an array of different titles and contents
    const differentCustomizations = [
      {
        title: "AI Styling Tips and Lookbooks",
        content:
          " Analyzes customer interactions and preferences to curate personalized styling tips and lookbooks based on individual tastes and previous purchases",
      },
      {
        title: "Trend Alerts and Limited-Edition Collections",
        content:
          "Uses data on customer preferences and previous purchases to notify customers about products that are likely to pique their interest.",
      },
      {
        title: "Sentiment Analysis for Customer Support",
        content:
          " Analyzes customer support interactions to gauge customer satisfaction and promptly identify any concerns that require attention",
      },
      {
        title: "AI-Powered Loyalty Program Challenges",
        content:
          " Tracks customer engagement with loyalty program challenges and analyzes the impact on customer retention and brand loyalty",
      },
      {
        title: "Sentiment Analysis for Customer Support",
        content:
          " Analyzes customer support interactions to gauge customer satisfaction and promptly identify any concerns that require attention",
      },
    ];

    const randomIndex = Math.floor(
      Math.random() * differentCustomizations.length
    );
    const randomCustomization = differentCustomizations[randomIndex];

    setEngagement([...engagement, randomCustomization]);
  };
  const trendAbayas = [
    {
      title: "Tossle abaya",
      image: trendone,
    },
    {
      title: "Tamara abaya",
      image: trendone,
    },
    {
      title: "hello abaya",
      image: trendone,
    },
  ];
  return (
    <div>
      <div className=" w-full flex">
        <Tab />
        <div className=" w-4/5 px-5 bg-gray-100">
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
          <div className=" mt-5 w-full flex gap-5">
            <div className=" w-3/5 h-auto px-5 py-5 bg-white shadow-lg rounded-2xl">
              <div className=" flex justify-between ">
                <div className=" flex flex-col">
                  <h1 className=" text-4xl ">AI Coaching</h1>
                  <h1 className=" text-xs">Improving tips</h1>
                </div>
                <div className=" flex flex-col">
                  <h1 className=" text-xs uppercase">ai generated</h1>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <div className=" w-full h-auto px-4 py-4 bg-gray-100 shadow-lg rounded-2xl">
                  <div className=" flex flex-col gap-3">
                    <h1 className=" text-xl">
                      {engagement[engagement.length - 1].title}
                    </h1>
                    <h1 className=" text-sm">
                      {engagement[engagement.length - 1].content}
                    </h1>

                    <Button
                      onClick={handleButtonClickOne}
                      variant="contained"
                      size="small"
                      style={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
                <div className=" w-full h-auto px-4 py-4 bg-gray-100 shadow-lg rounded-2xl">
                  <div className=" flex flex-col gap-3">
                    <h1 className=" text-xl">
                      {customizations[customizations.length - 1].title}
                    </h1>
                    <h1 className=" text-sm">
                      {customizations[customizations.length - 1].content}
                    </h1>

                    <Button
                      onClick={handleButtonClick}
                      variant="contained"
                      size="small"
                      style={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-2/6 h-auto px-5 py-5 bg-white shadow-lg rounded-2xl">
              <div className=" flex flex-col gap-3">
                <div className=" flex justify-between">
                  <div className=" flex flex-col">
                    <h1 className=" text-2xl">Trend Analysis</h1>
                    <h1 className=" text-xs">Top Trending Products</h1>
                  </div>
                  <h1 className=" text-xs uppercase">ai generated</h1>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" w-full h-28 px-2 py-2 bg-gray-100 shadow-md flex items-center">
                    <div className=" flex gap-5">
                      <div className=" w-24 h-24 rounded-lg ">
                        <img
                          className=" w-full h-full object-cover rounded-lg"
                          src={tone}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h1 className=" text-xs">New trending</h1>
                        <h1 className=" text-lg">Portrait abaya</h1>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-28 px-2 py-2 bg-gray-100 shadow-md flex items-center">
                    <div className=" flex gap-5">
                      <div className=" w-24 h-24 rounded-lg ">
                        <img
                          className=" w-full h-full object-cover rounded-lg"
                          src={ttwo}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h1 className=" text-xs">New trending</h1>
                        <h1 className=" text-lg">Portrait abaya</h1>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-28 px-2 py-2 bg-gray-100 shadow-md flex items-center">
                    <div className=" flex gap-5">
                      <div className=" w-24 h-24 rounded-lg ">
                        <img
                          className=" w-full h-full object-cover rounded-lg"
                          src={tthree}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h1 className=" text-xs">New trending</h1>
                        <h1 className=" text-lg">Portrait abaya</h1>
                      </div>
                    </div>
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
            <div
              className=" w-2/6 h-auto rounded-2xl shadow-lg px-5 py-5 bg-white cursor-pointer"
              onClick={() => navigate("/bi")}
            >
              <h1 className=" w-full text-xs uppercase flex justify-end">
                ai generated
              </h1>
              <div className=" w-full h-full flex flex-col">
                <div className=" w-full h-20  flex items-center justify-center ">
                  <h1 className=" text-6xl">
                    <IoMdAnalytics />
                  </h1>
                </div>
                <h1 className=" text-2xl flex justify-center w-full">
                  Competitors Analysis
                </h1>
                <h1 className=" text-xs w-full flex justify-center">
                  compare with competitors
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiCoaching;
