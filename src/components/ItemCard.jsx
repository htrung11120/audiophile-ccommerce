import OrangeButton from "./OrangeButton";
export default function ItemCard({ data }) {
  const categoryImage = data.categoryImage.mobile;
  const newItem = data.new;
  const description = data.description;

  return (
    <div>
      <img src={categoryImage} alt="" className="rounded-lg" />
      <div className="flex  flex-col gap-6 text-center">
        {newItem ? (
          <p className="mt-8 text-center text-sm uppercase tracking-[10px] text-[#D87D4A]">
            new product
          </p>
        ) : (
          <div className="mt-5"></div>
        )}
        <p className="text-[28px] font-bold uppercase ">{data.name}</p>
        <p className="text-[15px] leading-[25px] opacity-50">{description}</p>
        <OrangeButton data={data.slug} />
      </div>
    </div>
  );
}
