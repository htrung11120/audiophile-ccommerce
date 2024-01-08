import { useNavigate } from "react-router-dom";

export default function YX1EarphonesCard() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex flex-col gap-6 sm:flex-row">
      <div className="mx-6 h-52 rounded-lg bg-[url(src/assets/home/mobile/image-earphones-yx1.jpg)]  bg-contain sm:mx-0 sm:ml-6 sm:h-[320px] sm:flex-grow sm:bg-[url(src/assets/home/tablet/image-earphones-yx1.jpg)] sm:bg-cover"></div>
      <div className="mx-6 flex h-52 flex-col justify-center gap-8 rounded-lg  bg-[#F1F1F1] pl-6 sm:mx-0 sm:mr-6 sm:h-[320px] sm:w-[340px]">
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
    </div>
  );
}
