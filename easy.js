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

  let Valid=true;

  for (const item of cartItems) {
    if ((item.id).trim()==null) {
      alert("Invalid! ID cannot be Null");
      Valid=false;
    }
    if ((item.name).trim()==null){
      alert("Invalid! Item name cannot be null");
      Valid=false;
    }
    if (isNaN(item.price) ==false){
      alert("Invalid! Item price cannot be string");
      Valid=false;
    }else if(parseFloat(item.price)<0) {
      alert("Invalid! Item price cannot be negative");
      Valid=false;
    }

    if (isNaN(item.quantity) ==false){
      alert("Invalid! Item quantity cannot be string");
      Valid=false;
    }else if(parseFloat(item.quantity)<=0) {
      alert("Invalid! Item quantity cannot be negative or zero");
      Valid=false;
    }

    if (Valid){
      item.quantity+=null;
      parseFloat(price);
    }else{
      const idx=cartItems.indexOf(item);
      cartItems.splice(idx, 1);

      totalPrice+=(quantity*price);
    }
  }

  return { cleanedCart, totalPrice };
}

module.exports = { processCartData };
