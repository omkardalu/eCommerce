import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

const HomeHeader = () => {
  return (
    <header className="p-2 px-6 sticky top-0 left-0 right-0 z-50 shadow-2xl bg-(--graphite) text-(--cloud)">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-(--cloud) hover:underline">
          <Link href={"/"}>eCommerece</Link>
        </h1>
        <div className="flex gap-8  items-center ">
          <Link href={"/search"}>
            <div className="text-2xl p-2 rounded hover:bg-(--ink)">
              <IoSearchOutline />
            </div>
          </Link>

          <Link href={"/cart"}>
            <div className="px-2 hover:bg-(--ink) p-2 rounded text-2xl">
              <PiShoppingCartSimpleDuotone />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
