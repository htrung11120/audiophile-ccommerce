import React from "react";
import { useNavigate } from "react-router-dom";

export default function ZX7Speaker() {
  const navigate = useNavigate();

  return (
    <div className="mx-6 flex h-[20rem] flex-col justify-center gap-8 rounded-lg  bg-home-mobile-zx7 bg-contain pl-6">
      <p className=" text-[28px] font-bold uppercase tracking-[2px]">
        ZX7 Speaker
      </p>
      <button
        onClick={() => navigate("/detail/zx7-speaker")}
        className="h-12 w-40 border border-black text-[13px] font-bold uppercase tracking-[1px]"
      >
        see product
      </button>
    </div>
  );
}
