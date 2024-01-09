import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-[100px]">
      <p>Sorry Page Not Found!!!!!!!</p>
      <Link
        to="/home"
        className="w-[500px] rounded-xl bg-black text-center text-white"
      >
        Go Back
      </Link>
    </div>
  );
}
