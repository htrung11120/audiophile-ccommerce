import { useNavigate } from "react-router-dom";

export default function OrangeButton({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="h-12 w-40 self-center bg-[#D87D4A] text-[13px] font-bold uppercase text-white"
        onClick={() => {
          navigate(`/detail/${data}`);
        }}
      >
        see product
      </button>
    </div>
  );
}
