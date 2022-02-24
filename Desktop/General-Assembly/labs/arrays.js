
//  const fruits = ["banana", "apple", "mango"];
//  const firstIndex = 0
//  //will look at the last value in the array
//  console.log(fruits[fruits.length - 1]);

//  const fruits = ["banana", "apple", "mango", "pineapple", "strawberry"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// const fruits = ["banana", "apple", "mango"];
// let i = fruits.length -1
// while (i>=0) {
//     console.log(fruits[i]);
//     i--
// };

// const pairs = [
//     ['Harold', 'Kumar'],
//     ['Laurel', ['Hardy']]
// ]
// //prints "Hardy"
// console.log(pairs[1][1][0])



// const fruits = ["banana", "apple", "mango"];
// //how does shift work?
//  const bananaIndex = currentFruits.indexOf("banana");
// const faveMovies = ["movie", "movie1", "movie2"]
// faveMovies.shift();
// console.log(faveMovies)
// // makes array called "faveMovies"
// //shift will remove the first item of the array aka "movie"

// // // what if the element isn't found?
// // const pumpkinIndex = currentFruits.indexOf("pumpkin")
// // console.log(pumpkinIndex);
// // // it returns -1
// // // is it case sensitive?
// // const excitedIndex = currentFruits.indexOf("Banana");
// // console.log(excitedIndex)
// // // yes, it's case sensitive
// // // what if there are multiple bananas?
// // const secondIndex = currentFruits.indexOf("banana");
// // console.log(secondIndex);
// // // it takes the first one and ignores the rest





// // makes array called "faveMovies"
// const faveMovies = ["movie", "movie1", "movie2"]
// //shift will remove the first item of the array aka "movie"
// faveMovies.shift();
// // will print ["movie1", "movie2"] in the console
// console.log(faveMovies)

//////////////////////
//Feb 14th
/////////////////////

const sweaters = [
    {
        color: "blue",
        price: 50,
        fabricType : "wool"
    },
    {
        color: "green",
        price: 15,
        fabricType : "plastic"
    },
    {
        color: "purple",
        price: 500,
        fabricType : "cashmere"
    }
] 
"The green sweater is 15 dollars"

for(let i = 0; i < sweaters.length;i++){
    console.log(`The ${sweaters[i].color} sweater is ${sweaters[i].price} dollars`)
}
//The blue sweater is 50 dollars
//The green sweater is 15 dollars
//The purple sweater is 500 dollars

function determineAffordableSweaters(arr, priceLimit){
    const affordableSweaters = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price < priceLimit){
            affordableSweaters.push(arr[i])
        }
    }
    return affordableSweaters;
}
const result = determineAffordableSweaters(sweaters, 70);
//////////////////////////////// The most expensive sweater 1
function expensiveSweater(arr) {
    let expensiveSweater = arr[0];
    for(let j = 1; j < arr.length; j++) {
        if(expensiveSweater.price < arr[j].price) expensiveSweater = arr[j];
    }
    console.log(`The most expensive sweater is the ${expensiveSweater.color} ${expensiveSweater.fabricType} sweater that costs ${expensiveSweater.price} dollars.`);
}
expensiveSweater(sweaters);
//The most expensive sweater is the purple cashmere sweater that costs 500 dollars.

//////////////////////////////////// The most expensive sweater 2.0
const mostExpensiveSweater = (arr) => {
    //need to keep track of trhe most expensive one SO FAR
    let maxSweater = arr[0];
    //needs to look through whole array
    for(let i = 1; i < arr.length; i++){
        let currentSweater = arr[i]
        if(currentSweater.price > maxSweater.price){
            maxSweater = currentSweater;

        }
    }
    return maxSweater;
   
}
const pricySweater = mostExpensiveSweater(sweaters);
console.log(pricySweater)
 /////////////////////////////////
