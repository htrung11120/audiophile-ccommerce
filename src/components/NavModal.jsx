import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
export default function NavModal({ isOpen, closeModal, setIsOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center text-center  sm:mt-24 sm:items-start">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="my-24 w-full transform overflow-hidden  bg-white  pb-9 pt-16 text-left align-middle shadow-xl transition-all  sm:m-0 sm:my-0 sm:pb-0 sm:pt-0">
                  <div className="mt-28 flex flex-col items-center justify-center gap-12 sm:mx-10 sm:flex-row sm:gap-4">
                    <div className="mb-8">
                      <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]  sm:w-56">
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
                      <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]  sm:w-56">
                        <img
                          src={speakersThumbnail}
                          alt="Speaker Thumbnail"
                          className="absolute top-[-60px] h-40 w-40"
                        />
                        <p className="mt-20 text-[15px] font-bold uppercase leading-[1.1px]">
                          Earphones
                        </p>
                        <NavLink
                          to="/speakers"
                          className="mt-5 flex flex-row items-center justify-center gap-1 text-[13px] font-bold uppercase opacity-50"
                        >
                          Shop <IoIosArrowForward className="fill-[#D87D4A]" />
                        </NavLink>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative flex h-40 w-80 flex-col items-center justify-center rounded-lg bg-[#f1f1f1]  sm:w-56">
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
