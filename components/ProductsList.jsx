"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FiFilter } from "react-icons/fi";
import { BiSortDown } from "react-icons/bi";
import ListModifier from "./ListModifier";

const ProductsList = ({ name, items }) => {
  const [products, setProducts] = useState(items);
  const [isListModifierVisible,setIsListModifierVisible] = useState(false);
  const filter = (props) => {
    return products.filter((p) => {      
      const isRequired = props.type === "above"? props.value < p[props.filter] :  props.value > p[props.filter];
      return isRequired;
    })
  }
  
  const handleFilter = (props) => {
    const filterdList = filter(props)
    setProducts(filterdList);
  }

  const productsList = products.map((product) => {
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
        <p className="text-3xl text-bold capitalize  shadow-lg rounded-xl backdrop-blur bg-white/50 border border-(--platinum) w-fit h-full text-(--silver) touch-auto group-hover:text-(--graphite) px-4 my-4">
          {name}
        </p>
           {isListModifierVisible&& <ListModifier handleFilter={handleFilter} setIsListModifierVisible={setIsListModifierVisible} />}
        <div className=" z-10 text-2xl backdrop-blur bg-white/50  shadow-lg w-fit h-full p-2 px-4 border border-(--platinum) rounded-xl flex gap-6 ">
          <div onClick={() => {setIsListModifierVisible(!isListModifierVisible)}}>
            <FiFilter />
          </div>
          <div>
            <BiSortDown />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {products.length > 0 ? (
          productsList
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
