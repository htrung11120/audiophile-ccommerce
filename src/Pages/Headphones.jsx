import React from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import { useGlobalData } from "../contexts/DataContext";
import ItemsSection from "../components/ItemsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/scrollTotop";
import CategoryHeader from "../components/CategoryHeader";
import Introduction from "../components/Introduction";
export default function Headphones() {
  const { data, loading } = useGlobalData();
  const Xx59Mark = data?.[1];
  const Xx99MarkI = data?.[2];
  const Xx99MarkII = data?.[3];

  return (
    <div>
      <ScrollToTop />
      <div className="bg-black">
        <Navbar />
        <CategoryHeader itemName={"headphones"} />
      </div>
      {loading ? (
        <div>
          <p>The data is loading....</p>
        </div>
      ) : (
        <div className="mx-6 mt-16 flex flex-col gap-32">
          <ItemCard data={Xx99MarkII} />
          <ItemCard data={Xx99MarkI} />
          <ItemCard data={Xx59Mark} />
        </div>
      )}
      <div className=" pt-12">
        <ItemsSection />
      </div>
      <Introduction />

      <Footer />
    </div>
  );
}
