import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";

export default function QuantityControls({
  quantity,
  addQuantity,
  subtractQuantity,
  itemId,
}) {
  const { dispatch } = useGlobalData();
  const handleAddQuantity = () => {
    addQuantity();
  };

  const handleSubtractQuantity = () => {
    subtractQuantity();
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", id: itemId, quantity: quantity });
  };

  return (
    <div className="flex flex-row items-center gap-5">
      <div className="flex h-12 w-[7.5rem] flex-row items-center justify-center gap-5 bg-[#F1F1F1]">
        <FaMinus
          className="h-3 w-5 opacity-25"
          onClick={handleSubtractQuantity}
        />
        <p className="text-center text-[13px] font-bold text-black">
          {quantity}
        </p>
        <FaPlus className="h-3 w-5 opacity-25" onClick={handleAddQuantity} />
      </div>
      <button
        className="h-12 w-40 bg-[#D87D4A] text-[13px] font-bold uppercase text-white hover:bg-[#FBAF85]"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
