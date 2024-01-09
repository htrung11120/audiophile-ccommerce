import OrangeButton from "./OrangeButton";
export default function ItemCard({ data, reverse = false }) {
  const newItem = data.new;
  const categoryImage = data.categoryImage.mobile;
  const categoryImageTablet = data.categoryImage.tablet;
  const categoryImageDesktop = data.categoryImage.desktop;
  const description = data.description;
  const rowReverse = !reverse ? "flex-row" : "flex-row-reverse";
  return (
    <div
      className={`flex flex-col items-center  justify-center  sm:mx-10 lg:mx-[165px] lg:gap-[125px] lg:${rowReverse}`}
    >
      <img src={categoryImage} alt="" className="rounded-lg sm:hidden" />
      <img
        src={categoryImageTablet}
        alt=""
        className="hidden rounded-lg  sm:block sm:h-[352px]"
      />
      <img
        src={categoryImageDesktop}
        alt=""
        className="hidden rounded-lg sm:h-[352px] lg:block"
      />
      <div className="flex flex-col gap-6 text-center lg:h-[343px] lg:w-[445px]">
        {newItem ? (
          <p className="mt-8 text-center text-sm uppercase tracking-[10px] text-[#D87D4A] lg:text-start">
            new product
          </p>
        ) : (
          <div className="mt-5"></div>
        )}
        <p className="text-[28px] font-bold uppercase leading-[44px] sm:mx-40 sm:text-[40px] sm:tracking-[1.5px] lg:mx-0 lg:text-start ">
          {data.name}
        </p>
        <p className="text-[15px] leading-[25px] opacity-50 sm:mx-10 lg:mx-0 lg:text-start">
          {description}
        </p>
        <OrangeButton data={data.slug} />
      </div>
    </div>
  );
}
