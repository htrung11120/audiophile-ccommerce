import image from "../assets/shared/mobile/image-best-gear.jpg";
export default function Introduction() {
  return (
    <div className="mx-6 mb-32 mt-32 flex flex-col gap-8">
      <img src={image} alt="" className="rounded-lg" />
      <p className="text-center text-[28px] font-bold uppercase">
        Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
      </p>
      <p className="mx-3 text-center text-[15px] leading-6 opacity-50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}
