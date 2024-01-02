import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import ItemsSection from "../components/ItemsSection";
import Navbar from "../components/Navbar";
import { useGlobalData } from "../contexts/DataContext";
import ScrollToTop from "../utils/scrollTotop";
export default function Speakers() {
  const { data, loading } = useGlobalData();
  const zx9Speaker = data?.[5];
  const zx7Speaker = data?.[4];
  return (
    <div>
      <ScrollToTop />

      <div className="bg-black">
        <Navbar />
      </div>
      <CategoryHeader itemName={"speakers"} />
      {loading ? (
        <div>
          <p>The data is loading....</p>
        </div>
      ) : (
        <div className="mx-6 mt-16 flex flex-col gap-32">
          <ItemCard data={zx9Speaker} />
          <ItemCard data={zx7Speaker} />
        </div>
      )}
      <div className="pb-20 pt-12">
        <ItemsSection />
      </div>
      <Footer />
    </div>
  );
}
