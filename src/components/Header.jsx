import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-con  h-[600px] bg-[url(/src/assets/home/mobile/image-header.jpg)] bg-contain sm:h-[730px] sm:bg-[url(/src/assets/home/tablet/image-header.jpg)]">
      <Navbar />
      <HomeIntro />
    </div>
  );
}
