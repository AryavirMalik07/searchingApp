import React from "react";
import logo from "../images/ai.png";
const Navbar = () => {
  return (
    <div className="p-[20px] border-b-2 border-slate-700">
      <div className="flex items-center text-white gap-[10px]">
        <img className="w-[50px]" src={logo} alt="robot" />
        <h1 className="font-bold text-2xl">Openagent</h1>
      </div>
    </div>
  );
};

export default Navbar;
