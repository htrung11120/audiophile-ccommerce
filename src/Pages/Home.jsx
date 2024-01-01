import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import ItemsSection from "../components/ItemsSection";
import YX1EarphonesCard from "../components/YX1EarphonesCard";
import Z9xSpeakerCard from "../components/Z9xSpeakerCard";
import Z7xSpeakerCard from "../components/ZX7SpeakerCard";
export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Header />
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
