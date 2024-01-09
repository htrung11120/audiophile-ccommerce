import React from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import { useGlobalData } from "../contexts/DataContext";
import ItemsSection from "../components/ItemsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/scrollTotop";
import Introduction from "../components/Introduction";
import Loader from "../components/Loader";

export default function Earphones() {
  const { data, loading } = useGlobalData();
  const yx1Data = data?.[0];
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <div className="bg-black">
        <Navbar itemName={"earphones"} />
      </div>

      <div className="mx-6 mt-16 flex flex-col gap-32  lg:mt-40">
        <ItemCard data={yx1Data} />
      </div>
      <div className=" pt-12">
        <ItemsSection />
      </div>
      <Introduction />
      <Footer />
    </div>
  );
}
