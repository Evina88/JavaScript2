var x = document.body.style.fontFamily = 'Arial,sans-serif';

var Nickname = document.getElementById("nickname");
Nickname.innerText= "Evina";

var FavFood = document.getElementById('fav-food');
FavFood.innerText = "Pastitsio";

var Home = document.getElementById("hometown");
Home.innerText = "Athens";
 
   var liItems= document.querySelectorAll('li');
   console.log(liItems);
   for (var i = 0; i < liItems.length; i ++) {
     liItems[i].className= "list-item";
   }

   var newImg = document.createElement('img');
   newImg.src= "./images/explosion.png";
   document.body.appendChild(newImg); 
