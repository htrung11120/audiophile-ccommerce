export default function CategoryHeader({ itemName }) {
  return (
    <div className="flex items-center justify-center bg-black py-8 text-center text-[28px] font-bold uppercase tracking-[2px] text-white sm:pb-24 sm:pt-[105px] sm:text-[40px]">
      {itemName}
    </div>
  );
}
