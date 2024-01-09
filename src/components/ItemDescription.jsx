import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalData } from "../contexts/DataContext";

import ScrollToTop from "../utils/scrollTotop";
import Loader from "./Loader";
import Footer from "./Footer";
import Introduction from "./Introduction";
import ItemsSection from "./ItemsSection";
import ItemSuggestion from "./ItemSuggesttion";
import ImageCard from "./ImageCard";
import QuantityControls from "./QuantityControls";
import Features from "./Features";
import InTheBox from "./InTheBox";

function ItemDescription() {
  const { data, loading, state } = useGlobalData();
  const { item: itemId } = useParams();
  const [quantity, setQuantity] = useState(0);
  const itemQuanity = state.cart.find((item) => item.slug === itemId)?.quantity;
  useEffect(() => {
    setQuantity(itemQuanity || 0);
  }, [itemQuanity]);

  const item = data?.find((item) => item.slug === itemId);
  const imageMobile = item?.image.mobile;
  const imageTablet = item?.image.tablet;
  const imageDesktop = item?.image.desktop;
  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const subtractQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="">
      <ScrollToTop />
      <div>
        <div className="mx-6 sm:mx-10 lg:mx-[165px]">
          <button
            className="mb-6 ml-0 mt-4 text-[15px] leading-[25px] opacity-50 hover:text-[#D87D4A] lg:mb-14 lg:mt-20"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <div className="flex flex-col sm:flex-row sm:gap-[70px]">
            <img src={imageMobile} className="rounded-lg sm:hidden lg:hidden" />
            <img
              src={imageTablet}
              className="hidden h-[480px] w-[280px] rounded-lg sm:block lg:hidden"
            />
            <img
              src={imageDesktop}
              className="mr-[125px] hidden h-[560px] w-[540px] rounded-lg lg:block"
            />
            <div>
              {item?.new && (
                <p className="mt-8 text-sm uppercase tracking-[10px] text-[#D87D4A] lg:mt-[78px]">
                  new product
                </p>
              )}
              <p className="mt-6 text-[28px] font-bold uppercase lg:w-[440px] lg:text-[40px] ">
                {item?.name}
              </p>
              <p className="mt-6 text-[15px] leading-[25px] opacity-50 lg:w-[440px]">
                {item?.description}
              </p>
              <p className="mb-8 mt-6 text-lg font-bold tracking-[1.3px]">
                ${item?.price}
              </p>
              <QuantityControls
                quantity={quantity}
                addQuantity={addQuantity}
                subtractQuantity={subtractQuantity}
                itemId={itemId}
              />
            </div>
          </div>

          <div className="lg:mb-44 lg:flex lg:flex-row lg:gap-[125px]">
            <Features features={item?.features} />
            <InTheBox includeItems={item?.includes} />
          </div>

          <ImageCard galleries={item?.gallery} />
          <ItemSuggestion suggestItem={item?.others} />
          <ItemsSection />
        </div>

        <Introduction />
        <Footer />
      </div>
    </div>
  );
}

export default ItemDescription;
