// You are given an array of product objects, each containing a name (string) and a price (number). 
//Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending orde
//creating function to sort product based on price in ascendin order
function sortProduct(arr){
    return arr.sort((a,b)=>a.price-b.price)
}
const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Headphones", price: 79.99 },
  { name: "Keyboard", price: 49.99 },
  { name: "Mouse", price: 25.99 },
  { name: "Monitor", price: 299.99 },
  { name: "Camera", price: 199.99 }
];


// Function to sort products by name in descending order
function sortProductsByNameDescending(products) {
  return products.sort((a, b) => b.name.localeCompare(a.name));
}

// Call the function and store the sorted products
const sortedByNameDescending = sortProductsByNameDescending(products);

// Display the sorted array
console.log(sortedByNameDescending);

console.log(sortProduct(products));
