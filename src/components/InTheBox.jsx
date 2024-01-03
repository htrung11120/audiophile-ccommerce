import IncludeItems from "./IncludeItems";

export default function InTheBox({ includeItems }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="mt-24 text-2xl font-bold uppercase leading-6 tracking-[0.9px]">
        in the box
      </p>
      <IncludeItems includeItems={includeItems} />
    </div>
  );
}
