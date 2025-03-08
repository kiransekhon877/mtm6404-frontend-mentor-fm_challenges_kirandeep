Name-Kirandeep Kaur
student Id-041134559
Name of the challenge-Product list with cart
Practice updating the UI in multiple places based on user actions. The starter download also includes a JSON file to help you practice populating the DOM dynamically.
![active-states](https://github.com/user-attachments/assets/8f2cb051-e12f-42a5-9fde-7899e211fc25)
![desktop-design-order-confirmation](https://github.com/user-attachments/assets/894d36ab-e3be-4c92-b223-46323690d103)
![mobile-design-order-confirmation](https://github.com/user-attachments/assets/d382909b-e0bc-4c26-9cbd-918965421d43)
![mobile-design-empty](https://github.com/user-attachments/assets/41414e94-2d35-45c8-8dc0-e79c397d72c2)
Here are the challenges I have faced while working on the "Product List with Cart" challenge:

1. **Asynchronous Data Fetching
Challenge:** Fetching the product data from a JSON file asynchronously using fetch() and ensuring the DOM is updated only after the data is successfully loaded.
**Solution:** Managing asynchronous code and ensuring the data is properly loaded before trying to manipulate the DOM.
2. **Dynamically Populating the DOM
Challenge:** Dynamically creating HTML elements (product list, cart items) from JSON data and appending them to the DOM.
**Solution:** Using JavaScript functions to create and append elements while ensuring data is properly displayed in the correct format.
3. **Managing Cart State
Challenge:** Keeping track of cart items, especially their quantities, and ensuring that when a user adds the same product multiple times, the quantity increases correctly.
**Solution:** Using an array or object to store cart items and check if an item is already in the cart to adjust the quantity.
4. **Real-Time UI Updates
Challenge:** Updating the cart UI (list of items and total price) in real time when an item is added, and ensuring that all elements (product list and cart) reflect changes accurately.
**Solution:** Writing functions that manipulate the DOM to reflect changes in cart state and updating the total price accordingly.
5. **Event Handling for User Actions
Challenge:** Attaching event listeners to dynamically generated "Add to Cart" buttons and ensuring they interact with the cart properly.
**Solution:** Using event delegation or selecting elements correctly after the DOM has been updated with product data.
6. **Handling Empty Cart State
Challenge:** Dealing with an empty cart state and displaying a user-friendly message when the cart has no items.
**Solution:** Checking if the cart array is empty and updating the UI accordingly to show a message like "Your cart is empty."
7. **CSS and Responsiveness
Challenge:** Ensuring the product list and cart are responsive, especially when working with different screen sizes or layouts.
**Solution:** Using CSS Flexbox or Grid for layout and making sure the design adapts across various screen sizes.
8. **Error Handling
Challenge:** Handling potential errors, such as failed data fetching from the JSON file or invalid data.
**Solution:** Using try...catch or .catch() to gracefully handle errors and prevent the UI from breaking.
9. **Maintaining Clean and Efficient Code
Challenge:** Keeping the code clean, modular, and efficient, especially when manipulating the DOM in multiple places.
**Solution:** Writing reusable functions for UI updates and separating concerns for data fetching, UI rendering, and cart management.
10. **Cross-Browser Compatibility
Challenge:** Ensuring that the project works correctly across different browsers, especially with event handling and DOM manipulation.
**Solution:** Testing the project in multiple browsers to ensure functionality and using features that are supported widely.
