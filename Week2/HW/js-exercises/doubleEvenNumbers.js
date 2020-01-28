 const myNumbers = [1, 2, 3, 4];
 
 //filtering to find even numbers and console.log to make sure
 var filteredArray = myNumbers.filter(findEvenNums);
console.log(filteredArray);

function findEvenNums(numbers) {
  return numbers % 2 === 0; 
}

//mapping to multiply the even numbers
 var mapArray = filteredArray.map(doubleEvenNumbers);
 console.log(mapArray);
 
 function doubleEvenNumbers(numbers) { 
     return numbers *= 2;
     }

 