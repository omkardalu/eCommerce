import React from "react";
import ProductCard from "./ProductCard";

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
    <section className="w-full rounded-xl m-2  group bg-(--cloud) shadow  p-4">
      <div>
        <p className="text-4xl text-(--silver) touch-auto group-hover:text-(--graphite) font-extrabold px-4 my-4">{name}</p>
      </div>
      <div className="flex flex-wrap ">{products}</div>
    </section>
  );
};

export default ProductsList;
