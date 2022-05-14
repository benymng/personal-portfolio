import React from 'react';
import logo from './images/InfusionLogoblack.png';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-bule-500 w-full h-screen">
      <div className="flex h-4/5">
        <div className="m-auto">
          <img className="h-24 lg:h-2" src={logo} />
          <AiOutlineArrowDown size={28} className="h-12 m-auto mt-10" />
        </div>
      </div>
    </div>
  );
};
