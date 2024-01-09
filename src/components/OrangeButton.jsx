import { useNavigate } from "react-router-dom";

export default function OrangeButton({ data }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <button
        className="h-12 w-40  bg-[#D87D4A] text-[13px] font-bold uppercase text-white hover:bg-[#FBAF85] "
        onClick={() => {
          navigate(`/detail/${data}`);
        }}
      >
        see product
      </button>
    </div>
  );
}
