export default function ShippingInfor() {
  return (
    <div>
      <div>
        <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A] lg:mb-4">
          shipping info
        </p>
        <div className="flex flex-col gap-6">
          <div className="w-full font-bold">
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
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between lg:gap-4">
            <div className="flex w-[309px] flex-col gap-2 font-bold">
              <label
                className="mt-4 text-[12px] tracking-[-0.214] "
                htmlFor="zipCode"
              >
                ZIP Code
              </label>
              <input
                type="number"
                id="zipCode"
                className="h-14 rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                placeholder="10001"
              />
            </div>
            <div className="flex w-[309px] flex-col gap-2 font-bold">
              <label
                className="mt-4 text-[12px] tracking-[-0.214] "
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="h-14 rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                placeholder="New York"
              />
            </div>
            <div className="flex w-[309px] flex-col gap-2 font-bold">
              <label
                className="mt-4 text-[12px] tracking-[-0.214] "
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="h-14 rounded-lg border border-[#CFCFCF] pl-6 text-sm"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
