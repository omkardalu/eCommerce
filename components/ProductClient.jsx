"use client";
import { useCart } from "@/app/providers/CartProvider";
import Button from "@/components/Button";

const ProductClient = ({ id }) => {
  const [cart, setCart] = useCart();

  const addToCart = () => {
    setCart([...cart, id]);
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
