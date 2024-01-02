import { Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <div className="mt-[108px] flex flex-col items-center justify-center text-white">
      <p className="text-sm tracking-10px opacity-50">NEW PRODUCT</p>
      <p className="mt-4 text-center text-4xl font-bold uppercase leading-10 tracking-[1.3px]">
        XX99 Mark II HeadphoneS
      </p>
      <p className="mx-6 mt-6 text-center text-[15px] font-medium opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link to="/headphones">
        <button className="mt-7 h-12 w-40 bg-[#D87d4a] text-[13px] font-bold uppercase tracking-[1px]">
          see product
        </button>
      </Link>
    </div>
  );
}
