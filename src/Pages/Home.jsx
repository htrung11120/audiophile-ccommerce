import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import ItemsSection from "../components/ItemsSection";
import YX1EarphonesCard from "../components/YX1EarphonesCard";
import Z9xSpeakerCard from "../components/Z9xSpeakerCard";
import Z7xSpeakerCard from "../components/ZX7SpeakerCard";
import ScrollToTop from "../utils/scrollTotop";
export default function Home() {
  return (
    <div className=" scroll-smooth">
      <ScrollToTop />
      <div className="bg-black">
        <Header />
      </div>

      <ItemsSection />
      <div className="flex flex-col gap-6">
        <Z9xSpeakerCard />
        <Z7xSpeakerCard />
        <YX1EarphonesCard />
      </div>
      <Introduction />
      <Footer />
    </div>
  );
}
