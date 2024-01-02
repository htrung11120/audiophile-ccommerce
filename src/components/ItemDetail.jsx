import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function ItemDetail() {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
