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
import {useNavigate} from 'react-router-dom'
function Tab() {
    const navigate = useNavigate();
    const navigateSales = ()=>{
        navigate('/sales')
    }
    const purchase = () => {
        navigate('/purchase')
    }
    const financial = () => {
        navigate('/financial')
    }
    const marketing = () => {
        navigate('/marketing')
    }
  return (
    <div className=" w-1/5 h-screen bg-[#303030]">
      <div className=" pt-10 flex items-center justify-center ">
        <img src={logo} alt="" />
      </div>
      <div className=" mt-10 text-white">
        <div className=" w-full flex flex-col g justify-center px-10">
          <h1 className=" text-sm">Menu</h1>
        </div>
        <div className="  flex flex-col mt-5 px-10">
          <div onClick={navigateSales} className=" rounded-md flex flex-col justify-center items-start  h-12  hover:bg-[#404040]">
            <Button
              startIcon={<ShoppingCartOutlinedIcon />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Sales
            </Button>
          </div>
          <div onClick={purchase} className=" rounded-md flex flex-col justify-center items-start h-12  hover:bg-[#404040]">
            <Button
              startIcon={<FaShippingFast />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              purchase
            </Button>
          </div>
          <div onClick={financial} className=" rounded-md flex flex-col justify-center items-start h-12   hover:bg-[#404040]">
            <Button
              startIcon={<GiPayMoney />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              financial
            </Button>
          </div>
          <div onClick={marketing} className=" rounded-md flex flex-col justify-center  items-start h-12   hover:bg-[#404040]">
            <Button
              startIcon={<ImBullhorn />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              Marketing
            </Button>
          </div>
          <div className=" rounded-md flex flex-col justify-center items-start h-12   hover:bg-[#404040]">
            <Button
              startIcon={<AiOutlineAppstoreAdd />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              More
            </Button>
          </div>
          <hr className=" border border-1 border-gray-500" />
        </div>
        <div className=" w-full flex flex-col g justify-center px-10 mt-5">
          <h1 className=" text-sm">Easy Access</h1>
        </div>
        <div className="  flex flex-col mt-5 px-10">
          <div className=" rounded-md flex flex-col  items-start justify-center  h-12  hover:bg-[#404040]">
            <Button
              startIcon={<GiReceiveMoney />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              payment
            </Button>
          </div>
          <div className=" rounded-md flex flex-col  items-start h-12 justify-center hover:bg-[#404040]">
            <Button
              startIcon={<Inventory2OutlinedIcon />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              orders
            </Button>
          </div>
          <div className=" rounded-md flex flex-col  items-start h-12 justify-center  hover:bg-[#404040]">
            <Button
              startIcon={<FaFortAwesome />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              social media
            </Button>
          </div>
          <hr className=" border border-1 border-gray-500" />
        </div>
        <div className="  flex flex-col mt-5 px-10">
          <div className=" rounded-md flex flex-col  items-start justify-center  h-12  hover:bg-[#404040]">
            <Button
              startIcon={<ImCogs />}
              variant=""
              sx={{ textTransform: "lowercase" }}
            >
              settings
            </Button>
          </div>
          <div className=" rounded-md flex flex-col  items-start h-12 justify-center hover:bg-[#404040]">
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
      <h1 className=" mt-10 w-full flex items-center justify-center uppercase text-white text-[12px]">
        Ai powered by cashery{" "}
      </h1>
    </div>
  );
}

export default Tab;
