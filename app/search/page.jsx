import products from "@/utils/products";
import ProductCard from "@/components/ProductCard";
import React from "react";
import ProductsList from "@/components/ProductsList";
import { IoSearchOutline } from "react-icons/io5";

const page = async ({ searchParams }) => {
  const { s = "" } = await searchParams;
  if(s.length > 0){}
  const items = products.filter((p) =>
    p.name.toLowerCase().includes(s.toLowerCase()),
);

  return (
    <section className="relative">
      <form
        action="/search"
        method="get"
        className="flex items-center border mx-auto w-fit sticky top-[9%] z-10 shadow-xl border-(--platinum) p-1  rounded-lg bg-(--snow)"
      >
        <div className="shadow-inner rounded-lg">
        <input
          type="search"
          name="s"
          className="text-(--ink)   rounded-lg h-full  outline-0 font-medium text-lg px-4 py-2"
          placeholder="Search here"
          />
        <button type="submit" className="bg-(--slate) cursor-pointer text-white shadow-2xl text-xl rounded-lg h-full px-6 p-4 ">
          <IoSearchOutline />
        </button>
          </div>
      </form>
      <div className="my-4 px-4">
        <ProductsList name={"Search results for " + s} items={items} />
      </div>
    </section>
  );
};

export default page;
