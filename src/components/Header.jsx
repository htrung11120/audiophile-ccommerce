import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="h-screen bg-home-mobile-header bg-contain">
      <Navbar />
      <HomeIntro />
    </div>
  );
}
