import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import ItemCard from "../components/ItemCard";
import ItemsSection from "../components/ItemsSection";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useGlobalData } from "../contexts/DataContext";
import ScrollToTop from "../utils/scrollTotop";
export default function Speakers() {
  const { data, loading } = useGlobalData();
  const zx9Speaker = data?.[5];
  const zx7Speaker = data?.[4];
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="overflow-hidden">
      <ScrollToTop />

      <div className="bg-black">
        <Navbar />
      </div>
      <CategoryHeader itemName={"speakers"} />

      <div className="mx-6 mt-16 flex flex-col gap-32  lg:mt-40">
        <ItemCard data={zx9Speaker} />
        <ItemCard data={zx7Speaker} reverse={true} />
      </div>
      <div className="pb-20 pt-12">
        <ItemsSection />
      </div>
      <Introduction />
      <Footer />
    </div>
  );
}
