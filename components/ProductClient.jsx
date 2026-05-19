"use client";
import { useCart } from "@/app/providers/CartProvider";
import Button from "@/components/Button";
import { useToast } from "@/app/providers/ToastProvider";
import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import WishListButton from "./WishListButton";

const ProductClient = ({ id }) => {

  return (
    <div className="flex my-4 relative items-center flex-wrap lg:flex-nowrap ">
      <div className=" fixed top-0 right-0 ">
      <WishListButton id={id} />
      </div>
      <AddToCartButton id={id} />
      <Button type={1} text={"Buy Now"} />
    </div>
  );
};

export default ProductClient;
