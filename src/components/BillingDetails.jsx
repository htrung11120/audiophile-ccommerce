export default function BillingDetails() {
  return (
    <div>
      <div>
        <p className="mt-8 text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] text-[#D87D4A] lg:mb-4">
          billing details
        </p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="font-bold lg:w-[309px]">
            <label
              className="mt-4 text-[12px] tracking-[-0.214]"
              htmlFor="customerName"
            >
              Name
            </label>
            <input
              type="text"
              id="customerName"
              className="mt-2 h-14 w-full min-w-[175px] rounded-lg border border-[#CFCFCF] pl-6 text-sm"
              placeholder="Alexei Ward"
            />
          </div>
          <div className="font-bold lg:w-[309px]">
            <label
              className="mt-4 text-[12px] tracking-[-0.214]"
              htmlFor="customerEmail"
            >
              Email
            </label>
            <input
              type="email"
              id="customerEmail"
              className="mt-2 h-14 w-full min-w-[175px] rounded-lg border border-[#CFCFCF] pl-6 text-sm"
              placeholder="alexei@gmail.com"
            />
          </div>
          <div className="font-bold lg:w-[309px]">
            <label
              className="mt-4 text-[12px] tracking-[-0.214]"
              htmlFor="customerPhoneNumber"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="customerPhoneNumber"
              className="mt-2 h-14 w-full min-w-[175px] rounded-lg border border-[#CFCFCF] pl-6 text-sm"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
