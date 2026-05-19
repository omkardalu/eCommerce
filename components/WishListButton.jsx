import { useToast } from "@/app/providers/ToastProvider";
import { useWishList } from "@/app/providers/WhishListProvider";
import React, { useEffect, useState } from "react";

const WishListButton = ({id}) => {
  const [wishList,setWishListed] = useWishList();

  const toast = useToast();
  const [isWishlisted,setIsWishlisted] = useState(false);

  useEffect(() => {
    if (wishList.find((i) => i === id)) setIsWishlisted(true);
  }, []);

  const addToWishList = (id) => {
    setWishListed([...wishList, id]);
    setIsWishlisted(true);
    toast("Item added to wishList");
  };

  const removeFromWishList = (id) => {
    setWishListed(wishList.filter((i) => i !== id));
    setIsWishlisted(false);
    toast("Item removed from wishList");
  };

  const handleWishListBtn = () => {
    if (isWishlisted) {
      removeFromWishList(id);
    } else {
      addToWishList(id);
    }
  };


  return (
    <button
      onClick={handleWishListBtn}
      className={`absolute bottom-3 right-3 p-2.5 rounded-full transition-all duration-300 transform ${
        isWishlisted
          ? "bg-red-500 scale-110"
          : "bg-white/80 backdrop-blur-sm hover:bg-white"
      } shadow-md hover:shadow-lg`}
    >
      <svg
        className={`w-5 h-5 transition-colors ${isWishlisted ? "text-white" : "text-gray-700"}`}
        fill={isWishlisted ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default WishListButton;
