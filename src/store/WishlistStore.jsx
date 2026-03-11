import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };
  const isWishlisted = (id) => {
    // Defensive check: only call .some() if wishlist exists
    return wishlist?.some((item) => item.id === id) || false;
  };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
