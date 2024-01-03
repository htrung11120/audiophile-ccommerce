import React, { useState } from "react";
import { useGlobalData } from "../contexts/DataContext";

export default function Summary() {
  const { state } = useGlobalData();
  const substringsToRemove = ["headphones", "speaker", "earphones"];

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const [total, setTotal] = useState(calculateTotal());
  const [vat, setVat] = useState(total * 0.1);
  const [grandTotal, setGrandTotal] = useState(total + 50 + total * 0.1);

  const cartItems = state.cart;

  return (
    <div className="mx-6">
      <p className="text-lg font-bold uppercase tracking-[1.3px]">summary</p>
      {cartItems.length === 0 ? (
        <p>Please choose your item</p>
      ) : (
        cartItems.map((item, index) => {
          const modifiedString = item.name
            .replace(new RegExp(substringsToRemove.join("|"), "gi"), "")
            .trim();

          return (
            <div key={index} className="mb-6 mt-10  flex w-full flex-row">
              <div className="flex w-full flex-row justify-between">
                <div className="flex flex-row">
                  <img
                    src={item.cartImg}
                    className="h-16 w-16 rounded-lg"
                    alt=""
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="w-28 text-[15px] font-bold leading-[25px] text-black">
                      {modifiedString}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-[25px] opacity-50">
                      $ {item.price}
                    </p>
                  </div>
                </div>
                <p className="self-center text-sm font-bold leading-[25px] opacity-50">
                  x {item.quantity}
                </p>
              </div>
            </div>
          );
        })
      )}
      <div className="mt-8">
        <div className="mb-2 flex flex-row justify-between">
          <p className="text-[15px] uppercase leading-[25px] opacity-50">
            total
          </p>
          <p className="text-lg font-bold uppercase ">${total.toFixed(2)}</p>
        </div>
        <div className="mb-2 flex flex-row justify-between">
          <p className="text-[15px] uppercase leading-[25px] opacity-50">
            Shipping
          </p>
          <p className="text-lg font-bold uppercase">$50.00</p>
        </div>
        <div className="mb-2 flex  flex-row justify-between">
          <p className="text-[15px] uppercase leading-[25px] opacity-50">
            VAT (INCLUDED)
          </p>
          <p className="text-lg font-bold uppercase">${vat.toFixed(2)}</p>
        </div>
        <div className="mt-6 flex flex-row justify-between">
          <p className="text-[15px] uppercase leading-[25px] opacity-50">
            GRAND TOTAL
          </p>
          <p className="text-lg font-bold uppercase text-[#D87D4A]">
            ${grandTotal.toFixed(2)}
          </p>
        </div>
      </div>
      <button className="text-[13px font-bold] mt-8 h-12 w-full bg-[#D87D4A] text-center uppercase tracking-[1px] text-white">
        CONTINUE & PAY
      </button>
    </div>
  );
}
