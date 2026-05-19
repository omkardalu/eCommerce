import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useCart } from "@/app/providers/CartProvider";
import { useToast } from "@/app/providers/ToastProvider";

const AddToCartButton = ({id,type}) => {
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
    <Button
      handler={handleCartBtn}
      type={type||2}
      text={addedToCart ? "Remove from Cart" : "Add to Cart"}
    />
  );
};

export default AddToCartButton;
