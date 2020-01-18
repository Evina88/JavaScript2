const books = [
    {
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      alreadyRead: true,
      image: './images/tolle.jpg'
    },
    {
      title: 'The Anatomy of the Spirit',
      author: 'Carolyn Myss',
      alreadyRead: false,
      image: './images/myss.jpg',
    },
    {
        title: 'White Fang',
        author: 'Jack London',
        alreadyRead: true,
        image: './images/london.jpg',
      },
  ];

  var ListOfBooks = books.map(BookIndex);
 
  function BookIndex(books){
      var sentences = document.createElement("P");
      sentences.innerText= books.title + " written by " + books.author + "."; 
      document.body.appendChild(sentences);  
    }

    var UlBooks = books.map(BookUl);

    function BookUl(books){
        var list = document.createElement("LI");
        list.innerText = books.title + " by " +books.author;
        document.body.appendChild(list);
    };


 var coverImages = books.map(covers);

 function covers(img) {    
   var imageCover = document.createElement('img'); 
   
    imageCover.src = books.image;   
    imageCover.width = "100"; 
    imageCover.height = "100";
    imageCover.style = "margin: 10px "    ;                 
  document.body.appendChild(imageCover); };

  
  var imageCovers = document.getElementsByTagName("img");
  console.log(imageCovers);
     var i ;
   for (i = 0; i < books.length; i++) {
 if (books.alreadyRead === true) {
    imageCovers.style = "border: 50px solid red";
  }
 else { imageCovers.style = "border: 50px solid green";
}
   }
  