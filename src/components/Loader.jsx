import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      render(
      <InfinitySpin
        visible={true}
        width="500"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
      )
    </div>
  );
}
