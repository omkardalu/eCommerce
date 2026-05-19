"use client";

import { createContext, useContext, useState } from "react";

const WishListContext = createContext([]);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={[wishList, setWishList]}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () =>  useContext(WishListContext);
