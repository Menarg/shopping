import React from 'react';
import {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

// context for sending bookmarked info around
const cartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

// Fetches localStorage cart on site load
useEffect(() => {
    console.log('fetching cart');
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
        } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        }
    }
    }, []);

    // Update localStorage whenever cart changes
    useEffect(() => {
      if (cart && cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }, [cart]);  // Run every time cart changes

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    );
}

// makes sure context doesn't make more than one state
export const useCart = () => {
  const currentCart = useContext(cartContext);

  if (!currentCart) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return currentCart;
};

export default CartProvider;