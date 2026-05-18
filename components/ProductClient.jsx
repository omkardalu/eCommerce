"use client";
import { useCart } from "@/app/providers/CartProvider";
import Button from "@/components/Button";
import { useToast } from "@/app/providers/ToastProvider";
import { useEffect, useState } from "react";

const ProductClient = ({ id }) => {
  const [cart, setCart] = useCart();
  const toast = useToast();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (cart.find((i) => i === id)) setAddedToCart(true);
  }, []);

  const addToCart = (id) => {
    setCart([...cart, id]);
    setAddedToCart(true);
    toast("Item added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i !== id));
    setAddedToCart(false);
    toast("Item removed from cart");
  };
  
  const handleCartBtn = () => {
    if (addedToCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="flex my-4 items-center flex-wrap ">
      <Button
        handler={handleCartBtn}
        type={2}
        text={addedToCart ? "Remove from Cart" : "Add to Cart"}
      />
      <Button type={1} text={"Buy Now"} />
    </div>
  );
};

export default ProductClient;
