"use client";
import { getItems } from "@/utils/getItems";
import { useCart } from "../providers/CartProvider";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useWishList } from "../providers/WhishListProvider";
import ProductsList from "@/components/ProductsList";
const Cart = () => {
  const [wishListItems, setWishListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [cart, setCart] = useCart();
  const [wishList, setWishList] = useWishList();

  useEffect(() => {
    (async function () {
      const items = await getItems(cart);
      setCartItems(items);
      const items2 = await getItems(wishList);
      setWishListItems(items2);
    })();
  }, []);

  const totalItems = (
    <p className="p-2 ">
      Total Items: <p className="text-2xl">{cartItems.length}</p>
    </p>
  );

  const totalPrice = (
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
  );

  return (
    <section className="relative">
      <div className="">
        <div className="flex items-center flex-wrap py-4 justify-center">
          {cartItems.length === 0 ? (
            <div>No Items Added Yet</div>
          ) : (
            <section className=" w-screen">
              <div className="p-2 top-13 flex items-center justify-center gap-10 flex-wrap backdrop-blur-2xl  z-10 mb-4 sticky pb-3 md:max-w-1/2   shadow-md  mx-auto rounded-lg bg-(--cloud)/50 text-(--graphite) text-center">
                {totalItems}
                <div className="my-2">
                  <Button type={1} text={"Buy All"} />
                </div>
                {totalPrice}
              </div>
              <ProductsList name={"CartList"} items={cartItems} />
            </section>
          )}
        </div>
      </div>

      <div className="">
        <ProductsList name={"WishList"} items={wishListItems} />
      </div>
    </section>
  );
};

export default Cart;
