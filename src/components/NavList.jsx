import { NavLink } from "react-router-dom";

export default function NavList() {
  let hoverStyle = "hover:text-[#D87D4A]";
  return (
    <div className="mb-12 flex w-full flex-col items-center justify-center gap-4 text-[13px] font-bold uppercase leading-[25px] tracking-[2px] text-white sm:flex-row sm:gap-9 lg:mb-0  lg:gap-9">
      <NavLink to="/" className={hoverStyle}>
        Home
      </NavLink>
      <NavLink to="/headphones" className={hoverStyle}>
        headphones
      </NavLink>
      <NavLink to="/speakers" className={hoverStyle}>
        speakers
      </NavLink>
      <NavLink to="/earphones" className={hoverStyle}>
        earphones
      </NavLink>
    </div>
  );
}
