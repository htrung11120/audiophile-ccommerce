import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartModal from "./CartModal";
import { useGlobalData } from "../contexts/DataContext";
export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  const { state } = useGlobalData();
  function closeModal() {
    setIsOpen(false);
    if (state.cart.length === 0) {
    } else {
      setIsOpen(false);
    }
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="flex w-screen flex-row items-center justify-between border-b border-white/10 px-6 py-8">
        <GiHamburgerMenu className="h-8 w-8 fill-white " />
        <Link to="/home">
          <img src={logo} />
        </Link>
        <AiOutlineShoppingCart
          className="h-8 w-8 fill-white "
          onClick={openModal}
        />
      </div>
      <CartModal
        isOpen={isOpen}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
