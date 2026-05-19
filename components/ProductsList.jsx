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
    <section className="w-full relative group bg-(--cloud) shadow  p-2">
      <div className="sticky top-[9%] w-fit bg-(--cloud) rounded  shadow-xl  z-10">
        <p className="text-4xl w-full h-full text-(--silver) touch-auto group-hover:text-(--graphite) font-extrabold px-4 my-4">{name}</p>
      </div>
      <div className="flex flex-wrap ">{products.length >0? products:<div className="mx-auto my-10 text-4xl font-black text-(--graphite)">😅 No items found</div>}</div>
    </section>
  );
};

export default ProductsList;
