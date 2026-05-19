import React from "react";
import ProductCard from "./ProductCard";

const ProductCurrosal = ({ items, name }) => {
  return (
    <div className="my-4 px-4">
      <p className="text-4xl text-(--graphite) font-extrabold px-4 my-4">{name}</p>
      <div className="">
        <div className="flex items-center flex-wrap  justify-start overflow-x-auto">
          {items.map((product) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCurrosal;
