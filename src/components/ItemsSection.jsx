import React from "react";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ItemsSection() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-12">
      <div className="mb-8">
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]">
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
            className="mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50"
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>
      <div className="mb-8">
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]">
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
            className="mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50"
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>
      <div>
        <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]">
          <img
            src={speakersThumbnail}
            alt="Speakers Thumbnail"
            className="absolute top-[-60px] h-40 w-40"
          />
          <p className="mt-20 text-[15px] font-bold uppercase leading-[1.1px]">
            Speakers
          </p>
          <NavLink
            to="/speakers"
            className="mt-5 flex flex-row items-center justify-center gap-1 text-center text-[13px] font-bold uppercase opacity-50"
          >
            Shop <IoIosArrowForward className="fill-[#D87D4A]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
