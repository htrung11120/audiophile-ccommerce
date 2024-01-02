import { useNavigate, useParams } from "react-router-dom";
import { useGlobalData } from "../contexts/DataContext";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import IncludeItems from "./IncludeItems";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import Footer from "./Footer";
import Introduction from "./Introduction";
import ItemsSection from "./ItemsSection";
import ItemSuggesttion from "./ItemSuggesttion";
import ScrollToTop from "../utils/scrollTotop";
export default function ItemDescription() {
  const [quantity, setQuantity] = useState(1);
  const { data, loading } = useGlobalData();
  const id = useParams();
  const item = data?.filter((item) => item.slug === id.item);
  const image = item?.[0].categoryImage.mobile;
  const newItem = item?.[0].new;
  const name = item?.[0].name;
  const description = item?.[0].description;
  const price = item?.[0].price;
  const features = item?.[0].features;
  const includeItems = item?.[0].includes;
  const galleries = item?.[0].gallery;
  const suggestItem = item?.[0].others;

  const addQuanity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    if (quantity === 1) {
      return setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="">
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-6">
          <button
            className=" ml-0 mt-4 text-[15px] leading-[25px] opacity-50"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <img src={image} alt="" />
          {newItem ? (
            <p className="mt-8  text-sm uppercase tracking-[10px] text-[#D87D4A]">
              new product
            </p>
          ) : (
            <div className="mt-5"></div>
          )}
          <p className="mt-6 text-[28px] font-bold uppercase ">{name}</p>
          <p className="mt-6 text-[15px] leading-[25px] opacity-50">
            {description}
          </p>
          <p className="mb-8 mt-6 text-lg font-bold tracking-[1.3px]">
            ${price}
          </p>
          <div className="flex flex-row items-center gap-5">
            <div className="flex h-12 w-[7.5rem] flex-row items-center justify-center gap-5 bg-[#F1F1F1]">
              <TiMinus
                className="h-3 w-5 opacity-25"
                onClick={subtractQuantity}
              />
              <p className="text-center text-[13px] font-bold text-black">
                {quantity}
              </p>
              <FaPlus className="h-3 w-5 opacity-25" onClick={addQuanity} />
            </div>
            <button className="h-12 w-40 bg-[#D87D4A] text-[13px] font-bold uppercase text-white">
              add to cart
            </button>
          </div>
          <div>
            <p className="mb-6 mt-20 text-2xl font-bold uppercase leading-9 tracking-[0.9px]">
              features
            </p>
            <p className="whitespace-pre-line	 text-[15px] leading-[25px] opacity-50">
              {features}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="mt-24 text-2xl font-bold uppercase leading-6 tracking-[0.9px]">
              in the box
            </p>
            <IncludeItems includeItems={includeItems} />
            <div>
              <ImageCard galleries={galleries} />
            </div>
            <ItemSuggesttion suggestItem={suggestItem} />
            <ItemsSection />
            <Introduction />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
