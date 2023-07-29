import React, { useEffect, useRef } from "react";
import site from "../../assets/website assets/web.png";
import { useInView } from "react-intersection-observer";
import {RxCross2} from 'react-icons/rx'
import {useNavigate} from 'react-router-dom'

function Ready() {
  const { inView, ref } = useInView({
    threshold: 0.8,
  });
  const IRef = useRef();
  useEffect(() => {
    if (inView) {
      IRef.current.style.transform = "scale(1)"; // Scale to its actual size (1 means 100%)
    } else {
      IRef.current.style.transform = "scale(0)"; // Scale to 0 (hidden)
    }
  }, [inView]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/marketing/:false')
  }

  return (
    <div className=" bg-black">
      <div className=" flex justify-center items-center h-screen bg-black">
        <div className=" flex flex-col gap-8 items-center ">
          <h1 className=" text-white bg-black w-full flex justify-end cursor-pointer"><RxCross2 onClick={handleNavigate} className=" text-3xl"/></h1>
          <h1 className=" text-6xl text-white">Its Ready!</h1>
          <div ref={ref} className=" w-full h-[500px]">
            <img
              style={{ transitionDuration: "1s", transform: "scale(100%)" }}
              ref={IRef}
              className=" w-full h-full object-cover"
              src={site}
              alt=""
            />
          </div>
          <div class="relative inline-flex  group">
            <div class="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://trekkandtravel.com/"
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get it now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
