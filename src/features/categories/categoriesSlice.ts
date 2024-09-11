import { RootState } from "@/app/store"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Define the initial state
interface CategoriesState {
  categories: string[]
  loading: boolean
  error: string | null
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
}

// Define the async thunk to fetch categories
const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories",
    )
    return response.data
  },
)

// Create the slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Failed to fetch categories"
      })
  },
})

const selectCategories = (state: RootState) => state.categories.categories
// Export the async thunk and the slice reducer
export { fetchCategories, selectCategories }
export default categoriesSlice.reducer
