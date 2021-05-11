import { CART_ADD_ITEMS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEMS:
            let item = action.payload;
            let itemExist = state.cartItems.find((e) => e.product === item.product);
            if (itemExist) {
                return {
                    ...state,
                    //here e.product === itemExist.product matches the id's of the product
                    cartItems: state.cartItems.map((e) =>
                        e.product === itemExist.product ? item : e
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        default:
            return state;
    }
};
