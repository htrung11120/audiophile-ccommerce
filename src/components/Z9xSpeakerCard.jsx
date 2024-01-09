import { useNavigate } from "react-router-dom";
import speakersImgMobile from "../assets/home/mobile/image-speaker-zx9.png";
import speakersImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import speakersImgDesktop from "../assets/home/desktop/image-speaker-zx9.png";

export default function Z9xSpeakerCard() {
  const navigate = useNavigate();
  return (
    <div className="relative mx-6 flex h-[37.5rem] flex-col items-center overflow-hidden  rounded-lg bg-[#D87D4A] sm:mx-10 sm:h-[45rem] lg:mx-[165px] lg:h-[560px] lg:flex-row lg:items-end lg:justify-end ">
      <div className="flex flex-col items-center">
        <div className="absolute top-[-10px] flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-white/50 sm:top-[-100px] sm:h-[542px] sm:w-[542px] lg:left-[50px] lg:top-[150px] lg:h-[560px] lg:w-[560px]  ">
          <div className="flex h-[280px] w-[280px] items-center justify-center  rounded-full border border-white/50 sm:h-[472px] sm:w-[472px] lg:h-[500px] lg:w-[500px]"></div>
        </div>
        <img
          src={speakersImgMobile}
          className="absolute top-10 h-52 w-44 sm:hidden  "
        />
        <img
          src={speakersImgTablet}
          className="absolute top-10 hidden sm:block sm:h-60 sm:w-52 lg:hidden"
        />
        <img
          src={speakersImgDesktop}
          className="absolute bottom-[-10px] left-32 hidden h-[493px]  w-[410px] lg:block"
        />
      </div>

      <div className="absolute bottom-0  z-10 flex flex-col items-center justify-center pb-10 sm:top-[340px] sm:pb-16 lg:static lg:right-7  lg:items-start lg:pb-40 lg:pr-20">
        <p className=" w-[220px] text-center text-4xl font-bold  uppercase leading-10 tracking-[1.286px] text-white sm:w-[300px] sm:text-[56px] sm:leading-[58px] sm:tracking-[2px] lg:text-start">
          ZX9 SPEAKER
        </p>
        <p className="mx-10 pt-12 text-center text-[15px] leading-[25px] text-white opacity-75 sm:mx-48 sm:pb-10 sm:pt-6 lg:mx-0  lg:w-[320px] lg:text-start">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button
          className="mt-6 h-12 w-40 bg-black text-[13px] font-bold uppercase tracking-[1px] text-white  hover:bg-[#4C4C4C] sm:mt-0 "
          onClick={() => navigate("/detail/zx9-speaker")}
        >
          see product
        </button>
      </div>
      <div className="absolute h-[558px] w-[558px] rounded-full border-b border-white/50 sm:bottom-[70px] sm:h-[944px] sm:w-[944px] lg:left-[-65px] lg:top-[-80px] lg:h-[1000px] lg:w-[1000px] lg:border"></div>
    </div>
  );
}
