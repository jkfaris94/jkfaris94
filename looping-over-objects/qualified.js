
  
     const cart = {
        "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
        "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }}
 
 function calculateCartTotal(cart) {
      let total = 0;

    for (let item in cart) {
        total += cart[item].quantity * cart[item].priceInCents;
    }
    return total
  }
  
  function printCartInventory(cart) {
    let inventory = []

    for (let item in cart) {
        inventory.push(`${cart[item].quantity}x${item}`);
    }
    return inventory.join('\n');
  }

  //Explanation 
  //calculateCartTotal(cart):

//Initialize a total variable to 0.
//Loop over each item in the cart object.
//For each item, multiply its quantity by its priceInCents and add the result to the total.
//Return the total.
//printCartInventory(cart):

//Initialize an empty array inventory.
//Loop over each item in the cart object.
//For each item, create a string in the format quantity x item name and push it to the inventory array.
//Join all strings in the inventory array with \n and return the result.
//These functions will give you the desired outputs based on the given cart object.