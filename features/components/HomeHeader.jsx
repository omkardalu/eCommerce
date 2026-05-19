import Link from "next/link";
import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

const HomeHeader = () => {
  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-50 shadow-2xl bg-(--graphite) text-(--cloud)">
      <div className="flex justify-between items-center">
        <h1>
          <Link href={"/"}>eCommerece</Link>
        </h1>
        <div className="flex gap-4  items-center ">
          <form action="/search" method="get" className="flex items-center px-4 rounded-lg bg-(--snow)">
            <input
              type="search"
              name="s"
              className="text-(--ink) w-35 outline-0 font-medium text-lg px-2"
              placeholder="Search here"
            />
            <button type="submit" className="text-black p-2">
              <IoSearchOutline />
            </button>
          </form>
          <Link href={"/cart"}>
            <PiShoppingCartSimpleDuotone />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
