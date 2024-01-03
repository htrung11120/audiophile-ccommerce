import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Summary from "../components/Summary";

export default function Checkout() {
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState({
    eMoney: true,
    cashOnDelivery: false,
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethods({
      ...paymentMethods,
      [method]: !paymentMethods[method],
    });
  };
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mx-6 mt-4">
        <p
          onClick={() => navigate(-1)}
          className="text-[15px] leading-[25px] opacity-50"
        >
          Go Back
        </p>
        <div>
          <p className="mt-12 pl-6 text-[28px] font-bold uppercase tracking-[1px]">
            check out
          </p>
          <form action="#" className="mx-6 mb-8 ">
            <div>
              <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A]">
                billing details
              </p>
              <div className="flex flex-col gap-6">
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="customerName"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="Alexei Ward"
                  />
                </div>
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="customerEmail"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="alexei@gmail.com"
                  />
                </div>
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="customerPhoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="customerPhoneNumber"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A]">
                shipping info
              </p>
              <div className="flex flex-col gap-6">
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="customerAdress"
                  >
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="customerAdress"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="1137 Williams Avenue"
                  />
                </div>
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="zipCode"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="number"
                    id="zipCode"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="10001"
                  />
                </div>
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="New York"
                  />
                </div>
                <div className="font-bold">
                  <label
                    className="mt-4 text-[12px] tracking-[-0.214] "
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                    placeholder="New York"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A]">
                payment details
              </p>
              <div className="flex flex-col gap-6">
                <div className="font-bold">
                  <p className="mb-5"> Payment Method</p>
                  <div className="flex h-14 w-full flex-row items-center gap-6 rounded-lg border pl-4">
                    <input
                      type="radio"
                      id="e-Money"
                      className={`h-5 w-5 rounded-lg border border-[#CFCFCF] pl-6 text-sm accent-[#D87D4A] ${
                        paymentMethods.eMoney ? "border-[#D87D4A]" : ""
                      }`}
                      defaultChecked={true}
                      name="paymentMethod"
                      onChange={() => handlePaymentMethodChange("eMoney")}
                    />
                    <label className="text-sm tracking-[-0.]" htmlFor="e-Money">
                      e-Money
                    </label>
                  </div>
                  <div className="mt-4 flex h-14 w-full flex-row items-center gap-6 rounded-lg border pl-4">
                    <input
                      type="radio"
                      id="cashonDelivery"
                      name="paymentMethod"
                      onChange={() =>
                        handlePaymentMethodChange("cashOnDelivery")
                      }
                      className={`h-5 w-5 rounded-lg border border-[#CFCFCF] pl-6 text-sm accent-[#D87D4A] ${
                        paymentMethods.cashOnDelivery ? "border-[#D87D4A]" : ""
                      }`}
                    />
                    <label
                      className="text-sm tracking-[-0.]"
                      htmlFor="cashonDelivery"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                {paymentMethods.eMoney ? (
                  <div>
                    <div className="font-bold">
                      <label
                        className="mt-4 text-[12px] tracking-[-0.214] "
                        htmlFor="e-MoneyNumber"
                      >
                        e-Money Number
                      </label>
                      <input
                        type="number"
                        id="e-MoneyNumber"
                        className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                        placeholder="238521993"
                      />
                    </div>
                    <div className="font-bold">
                      <label
                        className="mt-4 text-[12px] tracking-[-0.214] "
                        htmlFor="e-MoneyPIN"
                      >
                        e-Money PIN
                      </label>
                      <input
                        type="number"
                        id="e-MoneyPIN"
                        className="mt-2 h-14 w-full rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                        placeholder="6891"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
        <div>
          <Summary />
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
