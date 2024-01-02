import { useNavigate } from "react-router-dom";
import speakersImg from "../assets/home/mobile/image-speaker-zx9.png";

export default function Z9xSpeakerCard() {
  const navigate = useNavigate();
  return (
    <div className="relative mx-6 mt-32 flex h-[37.5rem] flex-col  items-center rounded-lg bg-[#D87D4A] text-white">
      <div className="flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-white ">
        <div className="flex h-[17.5rem] w-[17.5rem] items-center justify-center rounded-full border border-white">
          <img src={speakersImg} alt="" className="h-52 w-44" />
        </div>
      </div>
      <p className=" absolute top-[18.125rem] mx-10 text-center text-4xl font-bold uppercase leading-10 tracking-[1.3px]">
        ZX9 SPEAKER
      </p>
      <p className="absolute bottom-32  text-center text-[16px] leading-[25px] opacity-75">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button
        onClick={() => navigate("/detail/zx9-speaker")}
        className="absolute bottom-10 h-12 w-40 bg-black text-center text-[13px] font-bold uppercase"
      >
        see product
      </button>
      <div className="absolute  bottom-40 flex h-[560px] w-[560px] items-center justify-center rounded-full border-b border-white"></div>
    </div>
  );
}
