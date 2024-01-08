import { NavLink } from "react-router-dom";

export default function NavList() {
  return (
    <div className="mb-12 flex flex-col items-center justify-center gap-4 text-[13px] font-bold uppercase leading-[25px] tracking-[2px] text-white sm:flex-row sm:gap-9">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/headphones">headphones</NavLink>
      <NavLink to="/speakers">speakers</NavLink>
      <NavLink to="/earphones">earphones</NavLink>
    </div>
  );
}
