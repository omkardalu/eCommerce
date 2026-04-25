"use client"

import Button from "@/components/Button";
import cart from "@/utils/cart";

const ProductClient = ({ id }) => {
  const addToCart = () => {
    cart.push(id);
    console.log(cart);
  };

  return (
    <div className="flex my-4 items-center flex-wrap ">
      <Button handler={addToCart} type={2} text={"Add to cart"} />
      <Button type={1} text={"Buy Now"} />
    </div>
  );
};

export default ProductClient;
