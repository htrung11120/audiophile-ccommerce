import { useState } from "react";
// import cashImg from "../assets/shared/desktop/Shape.svg";
export default function PaymentDetails() {
  const [paymentMethods, setPaymentMethods] = useState({
    eMoney: true,
    cashOnDelivery: false,
  });
  const handlePaymentMethodChange = (method) => {
    setPaymentMethods((prevMethods) => ({
      eMoney: false,
      cashOnDelivery: false,
      [method]: !prevMethods[method],
    }));
  };

  return (
    <div>
      <div>
        <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A] lg:mb-4">
          payment details
        </p>
        <div className="flex flex-col gap-6">
          <div className="font-bold  sm:flex sm:flex-row sm:justify-between">
            <p className="mb-5 sm:mt-4"> Payment Method</p>
            <div className="sm:mt-10 lg:flex lg:flex-col lg:gap-4">
              <div
                className={`mt-4 flex h-14 w-[309px]   flex-row items-center gap-6 rounded-lg border pl-4 lg:mt-0 ${
                  paymentMethods.eMoney ? "border-[#D87D4A] " : ""
                }`}
              >
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
              <div
                className={`mt-4 flex h-14 w-[309px]   flex-row items-center gap-6 rounded-lg border pl-4 lg:mt-0 ${
                  paymentMethods.cashOnDelivery ? "border-[#D87D4A] " : ""
                }`}
              >
                <input
                  type="radio"
                  id="cashonDelivery"
                  name="paymentMethod"
                  onChange={() => handlePaymentMethodChange("cashOnDelivery")}
                  className={`h-5 w-5 rounded-lg border border-[#CFCFCF] pl-6 text-sm accent-[#D87D4A] ${
                    paymentMethods.cashOnDelivery ? "border-[#D87D4A] " : ""
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
          </div>
          {paymentMethods.eMoney ? (
            <div className="sm:flex sm:flex-row sm:justify-between">
              <div className="font-bold lg:flex lg:flex-col">
                <label
                  className="mt-4 text-[12px] tracking-[-0.214] "
                  htmlFor="e-MoneyNumber"
                >
                  e-Money Number
                </label>
                <input
                  type="number"
                  id="e-MoneyNumber"
                  className="mt-2 h-14 w-[309px]  rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                  placeholder="238521993"
                />
              </div>
              <div className="font-bold lg:flex lg:flex-col">
                <label
                  className="mt-4 text-[12px] tracking-[-0.214] "
                  htmlFor="e-MoneyPIN"
                >
                  e-Money PIN
                </label>
                <input
                  type="number"
                  id="e-MoneyPIN"
                  className="mt-2 h-14 w-[309px] rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                  placeholder="6891"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row gap-8">
              <img src="/assets/shared/desktop/Shape.svg" alt="" />
              <p className="mr-4 text-[15px] font-medium leading-[25px] opacity-50">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
