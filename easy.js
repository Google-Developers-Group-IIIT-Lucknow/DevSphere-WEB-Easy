// easy/easy.js

/**
 * Processes a list of cart items, cleaning and validating them,
 * and then calculates the total price.
 *
 * Each cart item object is expected to have:
 * - id: string (unique identifier)
 * - name: string (product name)
 * - quantity: string (number of items, can be "0", "1", " 2 ", "NaN", etc.)
 * - price: string (price per item, can be "10.00", " 5 ", "invalid", etc.)
 *
 * The function should:
 * 1. Validate each item:
 *    - `id` must be a non-empty string.
 *    - `name` must be a non-empty string after trimming whitespace.
 *    - `quantity` must be a positive integer.
 *    - `price` must be a positive number.
 * 2. Remove any invalid items from the cart.
 * 3. Convert `quantity` and `price` to appropriate number types.
 * 4. Calculate the total price of the valid items.
 *
 * @param {Array<Object>} cartItems - An array of cart item objects.
 * @returns {Object} - An object containing:
 *   - `cleanedCart`: Array of valid and cleaned cart items.
 *   - `totalPrice`: Total price of all valid items.
 */
function processCartData(cartItems) {
  const cleanedCart = [];
  let totalPrice = 0;

  for (const item of cartItems) {
 
    if (!item.id || item.id.trim().length === 0) continue;
    if (!item.name || item.name.trim().length === 0) continue;
    const quantity = parseInt(item.quantity, 10);
    if (isNaN(quantity) || quantity <= 0) continue;
    const price = parseFloat(item.price);
    if (isNaN(price) || price <= 0) continue;

    cleanedCart.push({ id: item.id, name: item.name, quantity, price });
    totalPrice += quantity * price;
  }

  return { cleanedCart, totalPrice };
}

module.exports = { processCartData };
