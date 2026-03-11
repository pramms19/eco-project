// import { useState, useEffect } from 'react';

// export const useCartStorage = (key, initialValue) => {
//   const [state, setState] = useState(() => {
//     try {
//       const storedValue = localStorage.getItem(key);
//       return storedValue ? JSON.parse(storedValue) : initialValue;
//     } catch (error) {
//       console.error("Error reading localStorage key “" + key + "”:", error);
//       return initialValue;
//     }
//   });

//   // Use useEffect to update localStorage whenever the state changes
//   useEffect(() => {
//     console.log(state)
//     try {
//       localStorage.setItem(key, JSON.stringify(state));
//     } catch (error) {
//       console.error("Error setting localStorage key “" + key + "”:", error);
//     }
//   }, [key, state]);

//   return [state, setState];
// };

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    //   setCartItems(prev => [...prev, product]);
  };

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cartItems, totalCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
