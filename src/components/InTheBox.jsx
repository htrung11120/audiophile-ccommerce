import IncludeItems from "./IncludeItems";

export default function InTheBox({ includeItems }) {
  return (
    <div className="mb-10 mt-24 flex flex-col gap-6  sm:mb-32 sm:flex-row sm:justify-between lg:block lg:h-[225px] lg:w-[350px]">
      <p className="text-2xl font-bold uppercase leading-6 tracking-[0.9px] lg:mb-8">
        in the box
      </p>
      <div>
        <IncludeItems includeItems={includeItems} />
      </div>
    </div>
  );
}
