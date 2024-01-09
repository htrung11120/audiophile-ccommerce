import { v4 as uuid } from "uuid";
import OrangeButton from "./OrangeButton";

export default function ItemSuggesttion({ suggestItem }) {
  return (
    <div>
      <div className="mt-24">
        <p className="mb-14  text-center text-2xl font-bold uppercase leading-9 tracking-[0.9px]">
          you may also like
        </p>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-3 lg:gap-10">
          {suggestItem.map((el) => {
            return (
              <div
                key={uuid()}
                className="mb-14 flex flex-col items-center justify-center  gap-8 "
              >
                <img
                  className="h-30 rounded-lg sm:hidden"
                  key={uuid()}
                  src={el.image.mobile}
                  alt=""
                />
                <img
                  className="hidden rounded-lg sm:block sm:h-[320px] sm:w-[224px]  lg:hidden"
                  key={uuid()}
                  src={el.image.tablet}
                  alt=""
                />
                <img
                  className="hidden rounded-lg lg:block lg:h-[318px] lg:w-[350px]"
                  key={uuid()}
                  src={el.image.desktop}
                  alt=""
                />
                <p className="text-2xl font-bold tracking-[1.8px]" key={uuid()}>
                  {el.name}
                </p>
                <OrangeButton data={el.slug} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
