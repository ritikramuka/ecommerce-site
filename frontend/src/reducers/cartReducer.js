import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEMS:
            let item = action.payload;
            let itemExist = state.cartItems.find((e) => e.productId === item.productId);
            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((e) =>
                        e.productId === itemExist.productId ? item : e
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter((e) =>
                    e.productId !== action.payload
                ),
            }
        default:
            return state;
    }
};
