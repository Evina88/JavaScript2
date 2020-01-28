const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];
// Write a program that outputs each of these inside an HTML file
const myHobbiesAre = myHobbies.forEach(hobby => {console.log(hobby)});

// Create an HTML and JavaScript file, link them together
// Use the map and / or forEach function to put each hobby into a list item
// Output the list items in an unordered list

//Create a ul inside my div
let ul = document.createElement('ul');
		document.getElementById('myList').appendChild(ul);
  
let HobbiesList = myHobbies.forEach(function(hobby){
		let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += hobby;
		});