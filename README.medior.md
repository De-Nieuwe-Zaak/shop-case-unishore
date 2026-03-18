### Task: Implement a Product Lister with Cart & Category Filtering

### Objective

Build a working product lister with cart functionality and category filtering in a React application using TypeScript and Redux Toolkit. A base app, Redux store, and a stubbed `cartSlice` are already in place — extend them, don't replace them.

### Getting Started

Make sure you have Node.js 21 installed (or use `nvm use`), then run:

```bash
npm install
npm run dev
```

### Fake Store API

https://fakestoreapi.com/docs

Relevant endpoints:
- `GET /products` — all products
- `GET /products/categories` — list of category strings
- `GET /products/category/:category` — products filtered by category

### Filtering

The filter sidebar visible in the design mockup is not part of this task — you can ignore it.

### Focus Areas

1. **Design Implementation:** Follow the provided design for the product lister closely.
2. **TypeScript:** Required throughout — no `any`, no JavaScript fallback.
3. **Redux Toolkit:** Correct use of slices, thunks, and typed hooks.
4. **Cart Integration:** The existing `cartSlice` needs to be upgraded and wired to the UI.

### Requirements

These requirements can be implemented in any order. Focus on quality over quantity.

1. **Design Implementation:**
   - Follow the design from the `design/` directory — spacing, typography, alignment.
   - Implement a grid layout to display products. Each card should show: image, name, description, price, and an "Add to Cart" button.
   - Show a loading state while products are being fetched and an error message if the fetch fails.
   - Desktop layout is the priority — responsive breakpoints are a bonus, not required.

2. **TypeScript:**
   - Define a `Product` interface matching the FakeStore API response.
   - Type your Redux state, actions, and component props.
   - No `any`. Use the typed hooks (`useAppDispatch`, `useAppSelector`) from `src/app/hooks.ts`.

3. **Fetch Data using Redux Toolkit:**
   - Create `src/features/products/productSlice.ts` with a `createAsyncThunk` to fetch products.
   - Connect the `ProductLister` component to the store — dispatch on mount, read state with `useAppSelector`.
   - Register the new reducer in the **existing store** (`src/app/store.ts`) — do not create a new store.

4. **Cart Integration:**
   - The existing `cartSlice.ts` currently stores `string[]` with a `TODO` comment. Upgrade it to store proper cart items with quantity:
     ```ts
     interface CartItem {
       id: number
       quantity: number
     }
     ```
   - Update the existing `addProduct` and `removeProduct` actions accordingly, and add an `incrementQuantity`/`decrementQuantity` action if needed.
   - Add an "Add to Cart" button to each product card that dispatches to the cart.
   - Wire the **cart badge** in `Header.tsx` to real Redux state — it is currently hardcoded to `3`.

5. **Category Filtering:**
   - Fetch the list of categories from `/products/categories` and render them as tabs or a dropdown above the product grid.
   - Filtering can happen client-side or by calling `/products/category/:category` — your choice.
   - The selected category should be stored in Redux state (e.g. inside `productSlice` or a separate `filtersSlice`).
   - Using `createSelector` for the filtered list is encouraged but not required.

6. **Code Quality:**
   - Use a feature-folder structure: `src/features/products/`, `src/features/cart/`.
   - Use functional components and hooks throughout.
   - Keep code clean and readable — aim for the kind of code you'd be comfortable having reviewed.

### Deliverables

- `src/features/products/productSlice.ts` — with async thunk and typed state
- `src/features/cart/cartSlice.ts` — upgraded with `CartItem` and quantity support
- `ProductLister` component connected to the Redux store
- Category filter tabs/dropdown wired to the product list
- Cart badge in `Header.tsx` connected to real Redux state
- Loading and error states visible in the UI
- A short description added to this README on how to run and test the component

### Time Limit

2 hours

### Additional Notes

- The project has **Tailwind CSS**, **Axios**, and **Redux Toolkit** already configured — use them.
- The Redux store is set up in `src/app/store.ts` with typed `RootState` and `AppDispatch`. Extend it, don't replace it.
- Typed hooks (`useAppDispatch`, `useAppSelector`) are available in `src/app/hooks.ts` — use these instead of the plain Redux hooks.
- You are free to add libraries if needed, but keep it minimal and be prepared to justify the choice.

Good Luck! 🚀
