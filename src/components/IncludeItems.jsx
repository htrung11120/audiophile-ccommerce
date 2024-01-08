export default function IncludeItems({ includeItems }) {
  return (
    <>
      {includeItems?.map((item) => {
        return (
          <div
            className="flex flex-row gap-6 pr-24 text-[15px] leading-[25px]"
            key={item.item}
          >
            <p className=" font-bold  text-[#D87D4A]">{item.quantity}x</p>
            <p className="font-medium opacity-50">{item.item}</p>
          </div>
        );
      })}
    </>
  );
}
