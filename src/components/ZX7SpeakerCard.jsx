import { useNavigate } from "react-router-dom";

export default function ZX7Speaker() {
  const navigate = useNavigate();

  return (
    <div className="mx-6 flex h-[19rem] flex-col justify-center  gap-8 rounded-lg bg-[url(/src/assets/home/mobile/image-speaker-zx7.jpg)] bg-cover pl-6 sm:mx-10 sm:bg-[url(/src/assets/home/tablet/image-speaker-zx7.jpg)] sm:bg-cover  lg:mx-[165px] lg:bg-[url(/src/assets/home/desktop/image-speaker-zx7.jpg)]">
      <p className=" text-[28px] font-bold uppercase tracking-[2px]">
        ZX7 Speaker
      </p>
      <button
        onClick={() => navigate("/detail/zx7-speaker")}
        className="h-12 w-40 border border-black text-[13px] font-bold uppercase tracking-[1px] hover:bg-[#000000] hover:text-white"
      >
        see product
      </button>
    </div>
  );
}
