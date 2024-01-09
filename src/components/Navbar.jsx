import { GiHamburgerMenu } from "react-icons/gi";
// import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavModal from "./NavModal";
import CartModal from "./CartModal";
import NavList from "./NavList";

export default function Navbar() {
  let [isOpenCartModal, setIsOpenCartModal] = useState(false);
  let [isOpenNavModal, setIsOpenNavModal] = useState(false);

  function closeCartModal() {
    setIsOpenCartModal(false);
  }

  function openCartModal() {
    setIsOpenCartModal(true);
  }

  function closeNavModal() {
    setIsOpenNavModal(false);
  }

  function openNavModal() {
    setIsOpenNavModal(true);
  }

  return (
    <div className="flex flex-wrap ">
      <div className="flex w-full flex-row items-center justify-between border-b border-white/20 px-6 py-8 sm:mx-10 sm:px-0 lg:mx-[10.5rem] lg:py-10">
        <GiHamburgerMenu
          className="h-6 w-6 fill-white sm:mr-11 sm:h-8 md:w-8 lg:hidden"
          onClick={openNavModal}
        />
        <Link to="/home">
          <img src="/assets/shared/desktop/logo.svg" alt="Company Logo" />
        </Link>
        <div className="hidden lg:block ">
          <NavList />
        </div>
        <div className="sm:ml-auto lg:ml-0">
          <AiOutlineShoppingCart
            className="h-6 w-6  fill-white  md:h-8 md:w-8  "
            onClick={openCartModal}
          />
        </div>
      </div>

      <div>
        <CartModal
          isOpen={isOpenCartModal}
          closeModal={closeCartModal}
          setIsOpen={setIsOpenCartModal}
        />
        <NavModal
          isOpen={isOpenNavModal}
          closeModal={closeNavModal}
          setIsOpen={setIsOpenNavModal}
        />
      </div>
    </div>
  );
}
