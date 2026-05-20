"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FiFilter } from "react-icons/fi";
import { BiSortDown } from "react-icons/bi";
import ListModifier from "./ListModifier";
import { useToast } from "@/app/providers/ToastProvider";
import SortModel from "@/features/components/SortModel";

const ProductsList = ({ name, items }) => {
  const [products, setProducts] = useState(items);
  const toaster = useToast();
  const [isListModifierVisible, setIsListModifierVisible] = useState(false);
  const [isSortModelVisible, setIsSortModelVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const filter = (props) => {
    return items.filter((p) => {
      const isRequired =
        props.type === "above"
          ? props.value < p[props.filter]
          : props.value > p[props.filter];
      return isRequired;
    });
  };

  const handleFilter = (props) => {
    const filterdList = filter(props);
    setIsFiltered(true);
    setProducts(filterdList);
    toaster("Products Filtered");
  };

  const sortByKey = (arr, key) => {
    return arr.sort((a, b) => {
      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key]);
      }

      return a[key] - b[key];
    });
  };

  const handleSort = (prop) => {
    setProducts(sortByKey(products,prop));
    setIsSorted(true);
    setIsSortModelVisible(false);
    toaster("Products sorted by: "+prop)
  };

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
        {isListModifierVisible && (
          <ListModifier
            handleFilter={handleFilter}
            setIsListModifierVisible={setIsListModifierVisible}
          />
        )}
        <div className=" z-10 text-2xl backdrop-blur bg-white/50  shadow-lg w-fit h-full p-2 px-4 border border-(--platinum) rounded-xl flex gap-6 ">
          <div>
            {isFiltered ? (
              <div
                onClick={() => {
                  setIsFiltered(false);
                  toaster("Filter reset");
                  setProducts(items);
                }}
                className="text-blue-600"
              >
                <FiFilter />
              </div>
            ) : (
              <div
                className="text-(--slate) "
                onClick={() => {
                  setIsListModifierVisible(!isListModifierVisible);
                }}
              >
                <FiFilter />
              </div>
            )}
          </div>
          {isSortModelVisible && <SortModel handleSort={handleSort} />}
          {isSorted ? (
            <div onClick={()=> {setIsSorted(false); setProducts(items); toaster("Sort reset")}}>
              <BiSortDown />
            </div>
          ) : (
            <div className="text-(--slate)" onClick={()=> { setIsSortModelVisible(!isSortModelVisible);}}>
              <BiSortDown />
            </div>
          )}
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
