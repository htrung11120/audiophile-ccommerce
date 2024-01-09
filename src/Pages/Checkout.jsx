import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import BillingDetails from "../components/BillingDetails";
import ShippingInfor from "../components/ShippingInfor";
import PaymentDetails from "../components/PaymentDetails";
export default function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  function formHandleSubmit(e) {
    e.preventDefault();
    setIsModalOpen(true);
    navigate("/checkout/success");
  }

  return (
    <div className="overflow-hidden lg:bg-[#f1f1f1]">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mx-6 mt-4 lg:mx-[165px]">
        <p
          onClick={() => navigate(-1)}
          className="text-[15px] leading-[25px] opacity-50 lg:mb-10 lg:mt-20"
        >
          Go Back
        </p>
        <div className="lg:flex lg:flex-row lg:gap-8">
          <div className="lg:w-[800px] lg:rounded-lg lg:bg-[#FFFFFF]">
            <p className="mt-12 pl-6 text-[28px] font-bold uppercase tracking-[1px] sm:text-[32px] lg:mx-6">
              check out
            </p>
            <form className="mx-6 mb-8 lg:mx-12" onSubmit={formHandleSubmit}>
              <BillingDetails />
              <ShippingInfor />
              <PaymentDetails />
            </form>
          </div>
          <div className="lg:h-[612px] lg:w-[350px] lg:rounded-lg lg:bg-[#FFFFFF] lg:px-8 lg:pt-8">
            <Summary />
            <button
              type="button"
              className="text-[13px font-bold] mt-8 h-12 w-full cursor-pointer bg-[#D87D4A] text-center uppercase tracking-[1px] text-white hover:bg-[#FBAF85]"
              onClick={formHandleSubmit}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
      <Outlet context={[isModalOpen, setIsModalOpen]} />
    </div>
  );
}
