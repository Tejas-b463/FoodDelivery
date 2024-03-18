import React from "react";
import HomeImg from "../assets/Lunch1_vlksgq.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const mainPage = () => {
    navigate("/body");
  };
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="p-32 ">
        <h1 className="font-bold text-4xl">
          The Fastest Deliveing in Your City
        </h1>
        <button
          onClick={mainPage}
          className="font-bold text-2xl mt-6 bg-orange-400 p-4 rounded-sm text-white"
        >
          Order Now
        </button>
      </div>
      <div className="w-[700px]">
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
