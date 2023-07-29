import React from "react";
import logo from "../../assets/casherylogo.webp";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { GiPayMoney } from "react-icons/gi";
import { ImBullhorn } from "react-icons/im";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { FaShippingFast, FaFortAwesome } from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {FcIdea} from 'react-icons/fc'
import {FaThinkPeaks} from 'react-icons/fa'
function Tab() {
  const navigate = useNavigate();
  const navigateSales = () => {
    navigate("/sales");
  };
  const purchase = () => {
    navigate("/purchase");
  };
  const financial = () => {
    navigate("/financial");
  };
  const marketing = () => {
    navigate("/websitelogin");
  };
  const bi = () => {
    navigate("/ai");
  };
  const before = () => {
    navigate('/before')
  }
  return (
    <div className=" w-1/5 h-screen bg-white">
      <div className=" pt-10 flex items-center justify-center ">
        <img src={logo} alt="" />
      </div>
      <div className=" mt-10 text-black">
        <div className=" w-full flex flex-col g justify-center px-10">
          <h1 className=" text-sm">Menu</h1>
        </div>
        <div className="  flex flex-col mt-5 px-10 text-black">
          <div
            onClick={navigateSales}
            className=" rounded-md flex flex-col justify-center items-start  h-12  hover:bg-gray-200"
          >
            <Button
              startIcon={<ShoppingCartOutlinedIcon />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Sales
            </Button>
          </div>
          <div
            onClick={purchase}
            className=" rounded-md flex flex-col justify-center items-start h-12  hover:bg-gray-200"
          >
            <Button
              startIcon={<FaShippingFast />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              purchase
            </Button>
          </div>
          <div
            onClick={financial}
            className=" rounded-md flex flex-col justify-center items-start h-12   hover:bg-gray-200"
          >
            <Button
              startIcon={<GiPayMoney />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              financial
            </Button>
          </div>
          <div
            onClick={marketing}
            className=" rounded-md flex flex-col justify-center  items-start h-12   hover:bg-gray-200"
          >
            <Button
              startIcon={<ImBullhorn />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Marketing
            </Button>
          </div>
          <div className=" rounded-md flex flex-col justify-center items-start h-12   hover:bg-gray-200">
            <Button
              startIcon={<AiOutlineAppstoreAdd />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              More
            </Button>
          </div>
          <hr className=" border-black" />
        </div>
        <div className=" w-full flex flex-col g justify-center px-10 mt-5 text-black">
          <h1 className=" text-sm">Easy Access</h1>
        </div>
        <div className="  flex flex-col mt-5 px-10 text-black">
          <div className=" rounded-md flex flex-col  items-start justify-center  h-12  hover:bg-gray-200">
            <Button
              onClick={bi}
              startIcon={<FcIdea/>}
              variant=""
              sx={{ textTransform: "lowercase", width: "200px" }}
            >
              Business Intelligence
            </Button>
          </div>

          <div className=" rounded-md flex flex-col  items-start h-12 justify-center  hover:bg-gray-200">
            <Button onClick={before}
              startIcon={<FaThinkPeaks />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Before Business
            </Button>
          </div>
          <div className=" rounded-md flex flex-col  items-start h-12 justify-center  hover:bg-gray-200">
            <Button
              startIcon={<FaFortAwesome />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Real estate
            </Button>
          </div>
          <hr className=" border-black" />
        </div>
        <div className="  flex flex-col mt-5 px-10 text-black">
          <div className=" rounded-md flex flex-col  items-start justify-center  h-12  hover:bg-gray-200">
            <Button
              startIcon={<ImCogs />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              settings
            </Button>
          </div>
          <div className=" rounded-md flex flex-col  items-start h-12 justify-center hover:bg-gray-200">
            <Button
              startIcon={<FiLogOut />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              logout
            </Button>
          </div>
        </div>
      </div>
      <h1 className=" mt-10 w-full flex items-center justify-center uppercase text-xs text-black">
        Ai powered by cashery{" "}
      </h1>
    </div>
  );
}

export default Tab;
