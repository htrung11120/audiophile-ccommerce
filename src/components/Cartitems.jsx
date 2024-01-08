import React, { useState } from "react";
import { useGlobalData } from "../contexts/DataContext";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function CartItems() {
  const { state, setCartQuantity } = useGlobalData();
  const [quantities, setQuantities] = useState(
    state.cart.map((item) => item.quantity),
  );
  const substringsToRemove = ["headphones", "speaker", "earphones"];

  const subtractQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(1, updatedQuantities[index] - 1);
    setQuantities(updatedQuantities);

    if (updatedQuantities[index] === 1) {
      // If the quantity becomes 1 or less, remove the item from the cart
      const updatedCart = [...state.cart];
      updatedCart.splice(index, 1);
      setCartQuantity(updatedCart);
    } else {
      // Update the quantity in the cart
      const updatedCart = [...state.cart];
      updatedCart[index].quantity = updatedQuantities[index];
      setCartQuantity(updatedCart);
    }

    calculateTotal();
  };
  const addQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);

    const updatedCart = [...state.cart];
    updatedCart[index].quantity = updatedQuantities[index];
    setCartQuantity(updatedCart);
    calculateTotal();
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  console.log(state);
  return (
    <div className="flex flex-col sm:gap-4">
      {state.cart.length === 0 || null ? (
        <p>The cart is empty now.</p>
      ) : (
        state.cart?.map((item, index) => {
          const modifiedString = item.name
            .replace(new RegExp(substringsToRemove.join("|"), "gi"), "")
            .trim();

          return (
            <div key={index} className="mb-6 flex  flex-row justify-between ">
              <div className="flex flex-row">
                <img src={item.cartImg} className="h-16 w-16" alt="" />
                <div className="ml-4 flex flex-col">
                  <p className="w-28 text-[15px] font-bold leading-[25px] text-black">
                    {modifiedString}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-[25px] opacity-50">
                    $ {item.price}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex h-8 w-24 flex-row items-center justify-center gap-5 bg-[#F1F1F1] ">
                  <TiMinus
                    className="h-3 w-5 opacity-25"
                    onClick={() => subtractQuantity(index)}
                  />
                  <p className="text-center text-[13px] font-bold text-black">
                    {quantities[index]}
                  </p>
                  <FaPlus
                    className="h-3 w-5 opacity-25"
                    onClick={() => addQuantity(index)}
                  />
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="flex flex-row justify-between text-[15px] uppercase leading-[25px]">
        <p className="opacity-50">Total</p>
        <p className="text-lg font-bold">${calculateTotal()}</p>
      </div>
    </div>
  );
}
