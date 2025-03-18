import { createContext, useState } from "react";
import React from "react";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  title: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

// Create context
export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // State to hold cart items
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add an item to cart
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item exists, increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with initial quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    toast.success(`${item.title} added to cart`);
  };

  // Increase item quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.success("Item added to cart");
  };

  // Decrease item quantity
  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) => {
            if (item.id === id) {
              // Simply decrease the quantity, even if it becomes 0
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0) // This will remove items with quantity 0
    );
    toast.success("Item removed from cart");
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
