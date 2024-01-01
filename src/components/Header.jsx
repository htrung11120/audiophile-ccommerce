import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-home-mobile-header h-screen bg-contain">
      <Navbar />
      <HomeIntro />
    </div>
  );
}
