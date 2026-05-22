"use client";
import { useCart } from "@/app/providers/CartProvider";
import Button from "@/components/Button";
import { useToast } from "@/app/providers/ToastProvider";
import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import WishListButton from "./WishListButton";
import { useRouter } from "next/navigation";

const ProductClient = ({ id }) => {
  const router = useRouter();

const handleBuy = () => {
  router.push(`${id}/checkout`);
}
  return (
    <div className="flex my-4 relative items-center flex-wrap lg:flex-nowrap ">
      <div className=" fixed top-0 right-0 ">
      <WishListButton id={id} />
      </div>
      <AddToCartButton id={id} />
      <Button type={1} handler={handleBuy} text={"Buy Now"} />
    </div>
  );
};

export default ProductClient;
