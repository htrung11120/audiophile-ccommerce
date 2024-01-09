export default function Features({ features }) {
  return (
    <div className="lg:h-[320px] lg:w-[635px]">
      <p className="mb-6 mt-20 text-2xl font-bold uppercase leading-9 tracking-[0.9px]">
        features
      </p>
      <p className="mr-[20px] whitespace-pre-line text-[15px] leading-[25px] opacity-50">
        {features}
      </p>
    </div>
  );
}
