import React from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import { useGlobalData } from "../contexts/DataContext";
import ItemsSection from "../components/ItemsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/scrollTotop";

export default function Earphones() {
  const { data, loading } = useGlobalData();
  const yx1Data = data?.[0];

  return (
    <div>
      <ScrollToTop />
      <div className="bg-black">
        <Navbar itemName={"earphones"} />
      </div>
      {loading ? (
        <div>
          <p>The data is loading....</p>
        </div>
      ) : (
        <div className="mx-6 mt-16 flex flex-col gap-32">
          <ItemCard data={yx1Data} />
        </div>
      )}
      <div className="pb-20 pt-12">
        <ItemsSection />
      </div>
      <Footer />
    </div>
  );
}
