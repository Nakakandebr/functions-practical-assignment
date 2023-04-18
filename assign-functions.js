
//Create an array containing the names of all items in the inventory maximum of 10.
let inventoryProducts=["grapes","bread","milk","banana","biscuits","apples","books","vaseline","oranges","pineapples"]


//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let quantitiesOfInventory=[45,89,34,56,78,23,67,46,34,21];


//Write a function to add a new item to the inventory, updating both arrays.
function updateArray(product,number){
  inventoryProducts.unshift(product)&&quantitiesOfInventory.unshift(number);


}
updateArray("onions",34);
console.log(inventoryProducts);
// console.log(quantitiesOfInventory);

//// Write a function to update the stock quantity of an existing item.
function update() {
    let inventory = quantitiesOfInventory.slice(-1).map(number => number * 2);
    // let invent2=quantitiesOfInventory.slice(-2).map(number=>number-10)
  
  
    console.log(inventory);
}
 console.log(quantitiesOfInventory)
update();


//Write a function to calculate the total number of items in the inventory.
function totalNumberOfItems(){
    let sum=0;
    for (let i=0; i < quantitiesOfInventory.length; i++){
        sum += quantitiesOfInventory[i];
    }
    return sum;
}
console.log(totalNumberOfItems())


// Write a function to find the item with the lowest stock quantity.
function findLowest(){
  let lowest = quantitiesOfInventory[0];
  let index = 0;
  for(let i = 1; i < quantitiesOfInventory.length; i++){
      if(quantitiesOfInventory[i] < lowest){
          lowest = quantitiesOfInventory[i];
          index = i;
      }
  }
  return  inventoryProducts[index];
}
console.log(findLowest());