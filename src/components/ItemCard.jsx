import OrangeButton from "./OrangeButton";
export default function ItemCard({ data }) {
  const newItem = data.new;
  const categoryImage = data.categoryImage.mobile;
  const categoryImageTablet = data.categoryImage.tablet;
  const description = data.description;

  return (
    <div className="flex flex-col  items-center justify-center sm:mx-10">
      <img src={categoryImage} alt="" className="rounded-lg md:hidden" />
      <img
        src={categoryImageTablet}
        alt=""
        className="hidden rounded-lg sm:block sm:h-[352px]"
      />
      <div className="flex  flex-col gap-6 text-center">
        {newItem ? (
          <p className="mt-8 text-center text-sm uppercase tracking-[10px] text-[#D87D4A]">
            new product
          </p>
        ) : (
          <div className="mt-5"></div>
        )}
        <p className="text-[28px] font-bold uppercase leading-[44px] sm:mx-40 sm:text-[40px] sm:tracking-[1.5px] ">
          {data.name}
        </p>
        <p className="text-[15px] leading-[25px] opacity-50 sm:mx-10">
          {description}
        </p>
        <OrangeButton data={data.slug} />
      </div>
    </div>
  );
}
