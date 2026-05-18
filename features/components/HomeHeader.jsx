import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

const HomeHeader = () => {
  
  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-50 shadow-2xl  bg-(--graphite) text-(--cloud)">
      <div className="flex justify-between items-center">
          <h1><Link href={"/"}>eCommerece</Link></h1>
          <div>
            <Link href={"/cart"}>
              <PiShoppingCartSimpleDuotone />
            </Link>
          </div>
      </div>
    </header>
  );
};

export default HomeHeader;
