import logo from "../assets/shared/desktop/logo.svg";
import NavList from "./NavList";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#101010] sm:items-start sm:px-10">
      <div className="w-28 border-2 border-[#D87D4A]"></div>
      <img src={logo} className="my-12" />
      <NavList />
      <p className="mx-[30px] mb-12 text-center text-[15px] leading-[25px] text-white opacity-50 sm:mx-0 sm:mb-0 sm:mr-1 sm:text-left">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex w-full flex-col items-center justify-center sm:mb-12 sm:mt-20 sm:flex-row sm:justify-between">
        <p className=" text-[15px] font-bold leading-[25px] text-white opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className=" flex flex-row items-center justify-center gap-3">
          <RiFacebookBoxFill className="h-8 w-8 fill-white" />
          <IoLogoTwitter className="h-8 w-8 fill-white" />
          <FiInstagram className="h-8 w-8 fill-white" />
        </div>
      </div>
    </div>
  );
}
