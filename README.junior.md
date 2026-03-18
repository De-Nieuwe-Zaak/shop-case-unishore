### Task: Implement a Product Lister with Redux Toolkit

### Objective

Implement a basic, working product lister component in a React application using Typescript and Redux Toolkit. The API for fetching product data is available, and a base React app and Redux store have been set up.

### Getting Started

Make sure you have Node.js 21 installed (or use `nvm use`), then run:

```bash
npm install
npm run dev
```

### Fake Store API

https://fakestoreapi.com/docs

### Filtering

The filter sidebar visible in the design mockup is not part of this task — you can ignore it.

### Focus Areas

1. **Design Implementation:** Follow the provided design for the product lister closely.
2. **Typescript Usage:** Use Typescript for defining types, interfaces, and Redux slices.
3. **Code Quality:** Maintain clean, readable, and reusable code with proper comments and adherence to best practices.

### Requirements

These requirements can be implemented in any order, maybe not all can be implemented in the given time frame so focus on your strengths.

1. **Design Implementation:**
   - Follow the design from the provided image/figma file to ensure the product lister component matches the look and feel, including spacing, fonts, and alignment.
   - Implement a grid layout to display the products. Each product should show an image, name, description, and price.
   - The design files can be found in the `design` directory.

2. **Typescript Usage:**
   - Define types or interfaces for product data, Redux state, and actions.
   - Use Typescript for all new components, slices, and hooks to ensure type safety.
   - If you are not comfortable with Typescript, please use JavaScript instead.

3. **Fetch Data using Redux Toolkit:**
   - Connect the `ProductLister` component to the Redux store.
   - Dispatch the thunk action to fetch products when the component is mounted.
   - Use `useSelector` to get products, loading state, and error state from the Redux store.
   - If Redux is not your strong suit, you can call the API directly from the component.

4. **Code Quality:**
   - Use functional components, hooks, and Redux best practices.
   - Write clean, maintainable code with proper comments.
   - Use proper file structure, modularize code, and follow naming conventions.

### Deliverables

- A `ProductLister` component implemented in Typescript and integrated with Redux Toolkit.
- A new Redux slice (`productSlice.ts`) for managing product data fetching.
- Integration with the provided API to fetch and display products.
- Styling and layout that match the provided design.
- Basic error handling and loading states.
- A short description in this README on how to run and test the component.

### Time Limit

1.5 hours

### Additional Notes

- The project already has **Tailwind CSS** and **Axios** set up — feel free to use them.
- You are also free to use any other styling library (e.g., CSS modules, styled-components).
- Aim for a balance between functionality and code quality within the given time frame.
- Utilize the existing Redux store setup; do not create a new store.

Good Luck! 🚀
