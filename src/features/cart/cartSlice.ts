// TODO add real products to the cart
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
  products: string[]
}

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product !== action.payload,
      )
    },
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
