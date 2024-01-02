import React from "react";
import OrangeButton from "./OrangeButton";

export default function ItemSuggesttion({ suggestItem }) {
  console.log(suggestItem);

  return (
    <div>
      <div className="mt-24">
        <p className="text-center text-2xl font-bold uppercase leading-9 tracking-[0.9px]">
          you may also like
        </p>
        {suggestItem.map((el) => {
          console.log(el);
          return (
            <div
              key={el.id}
              className="mb-14 flex flex-col items-center justify-center gap-8"
            >
              <img
                className="h-30"
                key={el.slug}
                src={el.image.mobile}
                alt=""
              />
              <p className="text-2xl font-bold tracking-[1.8px]" key={el.name}>
                {el.name}
              </p>
              <OrangeButton data={el.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
