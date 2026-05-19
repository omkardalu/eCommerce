import React from "react";
import ProductCard from "./ProductCard";
import { FiFilter } from "react-icons/fi";
import { BiSortDown } from "react-icons/bi";

const ProductsList = ({ name, items }) => {
  const products = items.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        brand={product.brand}
        price={product.price}
        tag={product.tag}
        rating={product.rating}
      />
    );
  });

  return (
    <section className="w-full relative group  p-2">
      <div className="sticky top-15  justify-between  flex items-center z-10">
        <p className="text-4xl capitalize  shadow-lg rounded-xl backdrop-blur bg-white/50 border border-(--platinum) w-fit h-full text-(--silver) touch-auto group-hover:text-(--graphite) font-extrabold px-4 my-4">
          {name}
        </p>
        <div className=" z-10 text-2xl backdrop-blur bg-white/50  shadow-lg w-fit h-full p-2 px-4 border border-(--platinum) rounded-xl flex gap-6 ">
          <div>
            <FiFilter />
          </div>
          <div>
            <BiSortDown />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {products.length > 0 ? (
          products
        ) : (
          <div className="mx-auto my-10 text-4xl font-black text-(--graphite)">
            😅 No items found
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
