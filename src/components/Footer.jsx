import logo from "../assets/shared/desktop/logo.svg";
import NavList from "./NavList";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-[#101010]">
      <div className="flex flex-col items-center justify-center  sm:items-start sm:px-10 lg:mx-[165px]">
        <div className="w-28 border-2 border-[#D87D4A]"></div>
        <div className="flex ">
          <img src={logo} className="my-12 " />
          <div className="hidden w-screen  lg:ml-12 lg:flex ">
            <NavList />
          </div>
        </div>

        <div className="lg:hidden">
          <NavList />
        </div>
        <p className="mx-[30px] mb-12 text-center text-[15px] leading-[25px] text-white opacity-50 sm:mx-0 sm:mb-0 sm:mr-1 sm:text-left lg:w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex w-full flex-col items-center justify-center pb-12 sm:mb-12 sm:mt-20 sm:flex-row sm:justify-between">
          <p className=" text-[15px] font-bold leading-[25px] text-white opacity-50">
            Copyright 2024. All Rights Reserved
          </p>
          <div className=" mt-4 flex flex-row items-center justify-center gap-3">
            <RiFacebookBoxFill className="h-8 w-8 cursor-pointer fill-white hover:fill-[#D87D4A]" />
            <IoLogoTwitter className="h-8 w-8 cursor-pointer fill-white hover:fill-[#D87D4A]" />
            <FiInstagram className="h-8 w-8 cursor-pointer fill-white hover:fill-[#D87D4A]" />
          </div>
        </div>
      </div>
    </div>
  );
}
