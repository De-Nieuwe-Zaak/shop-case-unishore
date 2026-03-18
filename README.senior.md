### Task: Implement a Production-Quality Product Lister with Redux Toolkit

### Objective

Build a fully-featured, production-quality product lister in a React application using TypeScript and Redux Toolkit. A base app, Redux store, and a stubbed `cartSlice` are already in place — your job is to architect the state correctly, wire everything together, and deliver clean, testable, scalable code.

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

1. **Design Implementation:** Match the provided design closely, including responsive breakpoints.
2. **Advanced TypeScript:** Strict typing throughout — generics, discriminated unions, no `any`.
3. **RTK Best Practices:** Normalized state with `createEntityAdapter`, memoized selectors with `createSelector`.
4. **Feature Completeness:** All moving parts should work together — cart, search, filtering, persistence.

### Requirements

These requirements can be implemented in any order. Not all may be achievable in the time frame — focus on quality over quantity.

1. **Design Implementation:**
   - Follow the design from the `design/` directory closely — spacing, typography, alignment.
   - Implement a **responsive product grid**: 1 column on mobile, 2 on tablet, 4 on desktop.
   - Each product card shows: image, name, truncated description, price, and an "Add to Cart" button.
   - The "Add to Cart" button should reflect added state (e.g. "Added ✓") without a page reload.
   - Implement **skeleton loading cards** instead of a plain spinner.

2. **TypeScript — Strict:**
   - Define a `Product` interface matching the FakeStore API response shape.
   - Use a **discriminated union** for async state:
     ```ts
     type AsyncState<T> =
       | { status: 'idle' }
       | { status: 'loading' }
       | { status: 'success'; data: T }
       | { status: 'error'; error: string }
     ```
   - Create a reusable `AsyncSliceState<T>` generic type used in both `productSlice` and any future slices.
   - No `any`. Strict null checks must pass.

3. **Redux — Production Patterns:**
   - Create `src/features/products/productSlice.ts` using `createEntityAdapter` for normalized state.
   - Use `createSelector` for all derived state (filtered products, total cart price, cart item count).
   - **Upgrade the existing `cartSlice.ts`** — it currently stores `string[]` with a `TODO` comment. Replace it with proper `CartItem` entities supporting quantity:
     ```ts
     interface CartItem {
       id: number
       quantity: number
     }
     ```
   - Add `incrementQuantity`, `decrementQuantity`, and update `addProduct`/`removeProduct` accordingly.
   - Register the new `productReducer` in the **existing store** (`src/app/store.ts`) — do not create a new store.
   - Wire the **cart badge** in `Header.tsx` to real Redux state (currently hardcoded to `3`).

4. **Search & Category Filtering:**
   - Fetch categories from `/products/categories` and render them as filter tabs or a dropdown.
   - Implement client-side **search by product title** (case-insensitive).
   - Both search term and selected category should be stored in Redux state (e.g. `filtersSlice` or within `productSlice`).
   - Filtered product list must be derived via `createSelector` — not recomputed on every render.

5. **Cart Functionality:**
   - "Add to Cart" on a product card dispatches to the upgraded `cartSlice`.
   - Persist cart state to `localStorage` and **rehydrate on app load** (use RTK middleware or manual preloaded state — your choice, justify it).
   - Compute cart total price as a memoized selector: `selectCartTotal`.

6. **Code Quality:**
   - Feature-folder structure: `src/features/products/`, `src/features/cart/`
   - Extract logic into custom hooks:
     - `useProducts()` — encapsulates dispatch + selectors for the product list
     - `useCart()` — encapsulates cart dispatch actions and selectors
   - Wrap the product lister in a **React Error Boundary**.
   - Write **at least one unit test** for a Redux slice (e.g. `productSlice.test.ts`) covering the async thunk state transitions.

### Deliverables

- `src/features/products/productSlice.ts` — using `createEntityAdapter`, typed with `AsyncSliceState<T>`
- `src/features/products/useProducts.ts` — custom hook
- `src/features/cart/cartSlice.ts` — upgraded with `CartItem`, quantity actions, localStorage persistence
- `src/features/cart/useCart.ts` — custom hook
- `src/features/products/productSlice.test.ts` — at least one meaningful test
- Responsive product grid with skeleton loading and "Add to Cart" feedback
- Cart badge in `Header.tsx` connected to Redux
- A short description added to this README on how to run and test the component

### Time Limit

2 hours

### Additional Notes

- The project has **Tailwind CSS**, **Axios**, and **Redux Toolkit** already configured — use them.
- The Redux store is already set up in `src/app/store.ts` with typed `RootState`, `AppDispatch`, and `AppThunk`. Do not replace it — extend it.
- `useAppDispatch` and `useAppSelector` typed hooks are available in `src/app/hooks.ts`.
- You are free to use any additional libraries (e.g. `redux-persist`, Vitest matchers), but be prepared to justify the choice.
- Aim for the kind of code you'd submit in a pull request — not just working, but reviewable.

Good Luck! 🚀
