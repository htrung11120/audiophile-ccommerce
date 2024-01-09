import { createContext, useContext, useReducer, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import cartImg from "../utils/cartImgList";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error } = useFetchData("/data/data.json");
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });

  function setCartQuantity(updatedCart) {
    dispatch({ type: "SET_CART_QUANTITY", cart: updatedCart });
  }

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        const { id, quantity } = action;

        const itemToAdd = data?.find((item) => item.slug === id);

        if (itemToAdd) {
          const existingCartItemIndex = state.cart.findIndex(
            (item) => item.slug === id,
          );

          if (existingCartItemIndex !== -1) {
            // If the item is already in the cart, update its quantity
            const updatedCart = [...state.cart];
            updatedCart[existingCartItemIndex] = {
              ...updatedCart[existingCartItemIndex],
              quantity: updatedCart[existingCartItemIndex].quantity + quantity,
            };

            return { ...state, cart: updatedCart };
          } else {
            // If the item is not in the cart, add it
            const updatedCart = [
              ...state.cart,
              {
                ...itemToAdd,
                quantity,
                cartImg: cartImg[itemToAdd.id - 1],
              },
            ];

            return { ...state, cart: updatedCart };
          }
        }

        return state;
      }

      case "SET_CART_QUANTITY": {
        return { ...state, cart: action.cart };
      }

      case "REMOVE_ALL": {
        return { ...state, cart: [] };
      }
      case "SET_GRANDTOTAL": {
        return { ...state, grandTotal: action.grandtotal };
      }
      default: {
        throw new Error("unknown action: " + action.type);
      }
    }
  }

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        isLoading,
        setIsLoading,
        state,
        dispatch,
        setCartQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(DataContext);
};
