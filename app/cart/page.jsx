"use client";
import { getCartItems, getItems } from "@/utils/getItems";
import { useCart } from "../providers/CartProvider";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
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
    <div className="relative">
    <div className="sticky top-0">
      <h2 className="text-3xl p-2 m-2">Cart items</h2>
      <div className="flex items-center flex-wrap py-4 justify-center">
        {cartItems.length === 0 ? (
          <div>No Items Added Yet</div>
        ) : (
          <section className=" w-screen">
            <div className="p-2 top-13 flex items-center justify-center gap-10 flex-wrap backdrop-blur-2xl  z-10 mb-4 sticky pb-3 md:max-w-1/2   shadow-md  mx-auto rounded-lg bg-(--cloud)/50 text-(--graphite) text-center">
              <p className="p-2 ">
                Total Items: <p className="text-2xl">{cartItems.length}</p>
              </p>
              <div className="my-2">
                <Button type={1} text={"Buy All"} />
              </div>
              <p className="p-2 ">
                Total price:{" "}
                <p className="text-2xl">
                  ₹
                  {cartItems.reduce((ac, cu) => {
                    console.log(ac, cu.price);
                    return ac + cu.price;
                  }, 0)}
                </p>
              </p>
            </div>
            <div className="flex items-center overflow-auto flex-wrap justify-center">
              {cartItems.map((product, index) => {
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
              })}
            </div>
          </section>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;
