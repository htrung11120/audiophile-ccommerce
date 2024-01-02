import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex w-screen flex-row items-center justify-between border-b border-white/10 px-6 py-8">
        <GiHamburgerMenu className="h-8 w-8 fill-white " />
        <Link to="/home">
          <img src={logo} />
        </Link>
        <AiOutlineShoppingCart className="h-8 w-8 fill-white " />
      </div>
    </div>
  );
}
