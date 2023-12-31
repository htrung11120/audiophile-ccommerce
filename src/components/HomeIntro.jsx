import { Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center text-white lg:ml-[166px]  lg:items-start">
      <p className="text-sm font-normal tracking-10px opacity-50  ">
        NEW PRODUCT
      </p>
      <p className="mt-4 text-center text-4xl font-bold uppercase leading-10 tracking-[1.3px] sm:w-[400px] sm:text-[56px] sm:leading-[58px] sm:tracking-[2px] lg:text-start">
        XX99 Mark II HeadphoneS
      </p>
      <p className="mx-6 mt-6 text-center text-[15px] font-medium opacity-75 sm:w-[350px] lg:mx-0 lg:text-start">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link to="/headphones">
        <button className="mt-7 h-12 w-40 bg-[#D87d4a] text-[13px] font-bold uppercase tracking-[1px] hover:bg-[#FBAF85]">
          see product
        </button>
      </Link>
    </div>
  );
}
