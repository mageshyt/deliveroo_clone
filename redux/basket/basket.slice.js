import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let newBasket = [...state.items];
      const { payload: cartItemToAdd } = action;
      console.log(cartItemToAdd);
      const isExistingItem = newBasket?.find(
        (item) => item.id === cartItemToAdd.id
      );
      if (isExistingItem) {
        newBasket = newBasket.map((cartItem) =>
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        state.items = newBasket;
        return;
      }

      state.items = [...newBasket, { ...cartItemToAdd, quantity: 1 }];
    },
    RemoveBasket: (state, action) => {
      const { payload: cartItemToRemove } = action;
      let cartItem = [...state.items];
      const isExistingItem = cartItem?.find(
        (item) => item.id === cartItemToRemove.id
      );
      if (isExistingItem && isExistingItem.quantity > 1) {
        cartItem = cartItem.map((cartItem) =>
          cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        state.items = cartItem;
        return;
      }
      state.items = cartItem.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, RemoveBasket } = BasketSlice.actions;

export const selectorBasket = (state) => state.cart.items;

export const selectBasketItemWithID = (state, id) =>
  state.cart.items.find((item) => item.id === id)?.quantity;

export default BasketSlice.reducer;
