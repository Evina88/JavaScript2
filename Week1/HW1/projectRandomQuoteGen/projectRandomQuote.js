//Create an array with 2 properties, fav quotes and who said them
let quoteArray = [
    "Life is 10% what happens to you and 90% how you react to it. <br> ~Charles R. Swindoll.",
    "A person's success in life can easily be measured by the number of <br>uncomfortable conversations he or she is willing to make. <br>~Tim Feriss",
    "There is only one success: to be able to spend your life in your own way. <br>~Christopher Morley",
    "The best way out is always through.<br> ~Robert Frost",
    "What you do speaks so loudly I cannot hear what you say.<br> ~Ralph Waldo Emerson",
    "Seek patience and passion in equal amounts.<br> Patience alone will not build the temple. <br>Passion alone will destroy its walls. <br>~Maya Angelou"
 ];
console.log(quoteArray);

//Generate a random quote within the addQuote function
function addQuote () {
    let randomQuote = Math.floor(Math.random() * (quoteArray.length));
//display the random quote
    let container = document.getElementById("quoteHolder").innerHTML = quoteArray[randomQuote];
};

//
