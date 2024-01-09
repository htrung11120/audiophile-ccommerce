import React from "react";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ItemsSection() {
  let hoverStyle = "hover:text-[#D87D4A]";
  return (
    <div className=" z-10   mt-40 flex flex-col items-center justify-center gap-12 sm:mx-10 sm:flex-row sm:gap-4 lg:mx-[165px] lg:gap-10 ">
      <div className="mb-8">
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1] sm:w-56 lg:h-[204px]  lg:w-[350px]">
          <img
            src={headphonesThumbnail}
            alt="Headphones Thumbnail"
            className="absolute top-[-60px] h-40 w-40"
          />
          <p className="mt-20 text-[15px] font-bold uppercase leading-[1.1px]">
            Headphones
          </p>
          <NavLink
            to="/headphones"
            className={`mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50 ${hoverStyle}`}
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1] sm:w-56 lg:h-[204px]  lg:w-[350px]">
          <img
            src={speakersThumbnail}
            alt="Speaker Thumbnail"
            className="absolute top-[-60px] h-40 w-40"
          />
          <p className="mt-20 text-[15px] font-bold uppercase leading-[1.1px]">
            Speakers
          </p>
          <NavLink
            to="/speakers"
            className={`mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50 ${hoverStyle}`}
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>
      <div className="mb-8">
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1] sm:w-56 lg:h-[204px]  lg:w-[350px]">
          <img
            src={earphonesThumbnail}
            alt="Earphones Thumbnail"
            className="absolute top-[-60px] h-40 w-40"
          />
          <p className="mt-20 text-[15px] font-bold uppercase leading-[1.1px]">
            Earphones
          </p>
          <NavLink
            to="/earphones"
            className={`mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50 ${hoverStyle}`}
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
