import React from "react";
import { useNavigate } from "react-router-dom";

export default function YX1EarphonesCard() {
  const navigate = useNavigate();

  return (
    <div className="mx-6 flex h-52 flex-col justify-center  gap-8 rounded-lg bg-[#F1F1F1] pl-6">
      <p className="text-[28px] font-bold uppercase tracking-[2px] ">
        YX1 EARPHONES
      </p>
      <button
        onClick={() => navigate("/detail/yx1-earphones")}
        className="h-12 w-40 border border-black text-[13px] font-bold uppercase tracking-[1px]"
      >
        see product
      </button>
    </div>
  );
}
