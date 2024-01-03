import React, { useState } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const { data, state, loading, dispatch } = useGlobalData();
  const { item: itemId } = useParams();
  const item = data?.find((item) => item.slug === itemId);
  const quantityItem = state.cart.find((cartItem) => cartItem.slug === itemId);
  const image = item?.categoryImage.mobile;

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const subtractQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-6">
          <button
            className="ml-0 mt-4 text-[15px] leading-[25px] opacity-50"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <img src={image} alt="" />
          {item?.new && (
            <p className="mt-8 text-sm uppercase tracking-[10px] text-[#D87D4A]">
              new product
            </p>
          )}
          <p className="mt-6 text-[28px] font-bold uppercase ">{item?.name}</p>
          <p className="mt-6 text-[15px] leading-[25px] opacity-50">
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
          <Features features={item?.features} />
          <InTheBox includeItems={item?.includes} />
          <div>
            <ImageCard galleries={item?.gallery} />
          </div>
          <ItemSuggestion suggestItem={item?.others} />
          <ItemsSection />
          <Introduction />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ItemDescription;
