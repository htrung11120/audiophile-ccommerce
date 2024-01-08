import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavModal from "./NavModal";
import CartModal from "./CartModal";
import CategoryHeader from "./CategoryHeader";

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
      <div className="flex flex-row items-center justify-between border-b border-white/20 px-6 py-8 sm:mx-10  sm:px-0">
        <div>
          <GiHamburgerMenu
            className="h-6 w-6 fill-white  md:h-8 md:w-8"
            onClick={openNavModal}
          />
        </div>
        <div>
          <Link to="/home">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <div>
          <AiOutlineShoppingCart
            className="h-6 w-6 fill-white md:h-8 md:w-8"
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
