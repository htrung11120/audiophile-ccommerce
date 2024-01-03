import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="h-screen bg-[url(/src/assets/home/mobile/image-header.jpg)] bg-contain">
      <Navbar />
      <HomeIntro />
    </div>
  );
}
