const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

//Use the filter array function to take out the lemons
let lemonLessArray = fruitBasket.filter(removeLemons);

function removeLemons (fruits) {
    return fruits !== "Lemon";
}

console.log(lemonLessArray);

//output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"
const removeLastIndex = lemonLessArray.pop();//removing ,watermelon.

let convertingArray =lemonLessArray
.map(fruits => fruits.toLowerCase()) //lowercase
.map(fruits => fruits + "s") //plural
.join(', '); //adding space between commas
console.log(convertingArray);


const finalString = "My mom bought me a fruit basket, containing " + convertingArray + " and watermelons.";

console.log(finalString);