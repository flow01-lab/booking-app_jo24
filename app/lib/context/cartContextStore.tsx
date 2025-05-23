import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
});

export const CartProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(cartReducer, { items: []});
    const addToCart = (product: any) => {
        const updatedCart = [...state.items, product];
        dispatch({
            type: "ADD",
            payload: {
                items: updatedCart,
            },
        });
    };
    const removeFromCart = (id: any) => {
        const updatedCart = state.items.filter(
            (currentProduct: any) => currentProduct.id !== id
        );
        dispatch({
            type: "REMOVE",
            payload: {
                items: updatedCart,
            },
        });
    };
    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const cartReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            return {
                ...state,
                items: payload.items,
            };
        case "REMOVE":
            return {
                ...state,
                items: payload.items,
            };
        default:
            throw new Error("No case for that type");
    }
};  