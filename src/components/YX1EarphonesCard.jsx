import { useNavigate } from "react-router-dom";

export default function YX1EarphonesCard() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex flex-col gap-6 sm:mx-10 sm:flex-row lg:mx-[165px]">
      <div className="mx-6 h-52 rounded-lg bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] bg-contain sm:mx-0  sm:h-[320px] sm:flex-grow sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)] sm:bg-cover lg:w-[540px] lg:grow lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)]"></div>
      <div className="mx-6 flex h-52 flex-col justify-center gap-8 rounded-lg bg-[#F1F1F1] pl-6 sm:mx-0   sm:h-[320px] sm:w-[340px]  lg:w-[540px] lg:grow">
        <p className="text-[28px] font-bold uppercase tracking-[2px] ">
          YX1 EARPHONES
        </p>
        <button
          onClick={() => navigate("/detail/yx1-earphones")}
          className="h-12 w-40 border border-black text-[13px] font-bold uppercase tracking-[1px]  hover:bg-[#000000] hover:text-white"
        >
          see product
        </button>
      </div>
    </div>
  );
}
