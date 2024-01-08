import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavModal from "./NavModal";
import CartModal from "./CartModal";
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
    <div>
      <div className=" flex flex-row items-center justify-between border-b border-white/10 px-6 py-8 sm:mx-10">
        <GiHamburgerMenu
          className="h-8 w-8 fill-white "
          onClick={openNavModal}
        />
        <Link to="/home">
          <img src={logo} />
        </Link>
        <AiOutlineShoppingCart
          className="h-8 w-8 fill-white "
          onClick={openCartModal}
        />
      </div>
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
  );
}
