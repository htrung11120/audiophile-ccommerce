import React from "react";
import OrangeButton from "./OrangeButton";

export default function ItemSuggesttion({ suggestItem }) {
  return (
    <div>
      <div className="mt-24">
        <p className="mb-14  text-center text-2xl font-bold uppercase leading-9 tracking-[0.9px]">
          you may also like
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          {suggestItem.map((el) => {
            return (
              <div
                key={el.id}
                className="mb-14 flex flex-col  items-center justify-center gap-8"
              >
                <img
                  className="h-30 rounded-lg sm:hidden"
                  key={el.slug}
                  src={el.image.mobile}
                  alt=""
                />
                <img
                  className="hidden rounded-lg sm:block sm:h-[320px] sm:w-[224px]"
                  key={el.slug}
                  src={el.image.tablet}
                  alt=""
                />
                <p
                  className="text-2xl font-bold tracking-[1.8px]"
                  key={el.name}
                >
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
