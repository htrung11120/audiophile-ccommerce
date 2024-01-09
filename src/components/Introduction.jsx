export default function Introduction() {
  return (
    <div className="mx-6 mb-32 mt-32 flex flex-col gap-8 sm:mx-10 lg:mx-[165px] lg:flex-row-reverse lg:gap-[125px]">
      <div className="h-[300px] rounded-lg bg-[url(/assets/shared/mobile/image-best-gear.jpg)] bg-contain sm:hidden "></div>
      <div className="hidden h-[300px] rounded-lg bg-[url(/assets/shared/tablet/image-best-gear.jpg)] bg-contain sm:block lg:hidden "></div>
      <div className="hidden h-[588px] w-[540px] rounded-lg bg-[url(/assets/shared/desktop/image-best-gear.jpg)] bg-contain lg:block "></div>

      <div className="lg:mr-auto lg:h-[295px] lg:w-[445px] lg:self-start">
        <p className="mb-6 text-center text-[28px] font-bold uppercase sm:mx-16 sm:text-[40px] sm:leading-[44px] sm:tracking-[1.429px] lg:mx-0 lg:text-start">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </p>
        <p className="mx-3 text-center text-[15px] leading-[25px] opacity-50 lg:mx-0 lg:mr-[63px] lg:w-[500px] lg:text-start">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
