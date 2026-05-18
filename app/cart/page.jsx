"use client";
import { getCartItems, getItems } from "@/utils/getItems";
import { useCart } from "../providers/CartProvider";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
const Cart = () => {
  const [cart, setCart] = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async function () {
      const items = await getItems(cart);
      setCartItems(items);
    })();
  }, []);
  console.log(cartItems);

  return (
    <div className="">
      <h2 className="text-3xl p-2 m-2" >Cart items</h2>
      <div className="flex items-center flex-wrap py-4 justify-center">

      {cartItems.length === 0 ? (
        <div>No Items Added Yet</div>
      ) : (
        cartItems.map((product, index) => {
          return (
            <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            tag={product.tag}
            rating={product.rating}
            />
          );
        })
      )}
      </div>
    </div>
  );
};

export default Cart;
