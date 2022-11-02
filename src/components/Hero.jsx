import { AiFillCloud, AiFillDatabase } from "react-icons/ai";
import { MdCloudDone, MdConstruction } from "react-icons/md";

import bgImg from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud management
          </h1>
          <p className="text 2xl">¡We have the best services!</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="Hero image" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <AiFillCloud className="h-6 text-indigo-600" /> Cloud Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <MdCloudDone className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <AiFillDatabase className="h-6 text-indigo-600" /> Data base
              management
            </p>

            <p className="flex px-4 py-2 text-slate-500">
              <MdConstruction className="h-6 text-indigo-600" /> API for devs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
