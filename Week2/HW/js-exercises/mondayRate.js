const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

//euros per minute
var currentRate = 25 / 60;
console.log(currentRate);

//Use the map array function to take out the duration time for each task.
//Multiply each duration by a per-hour rate for billing and sum it all up.
    
    var taskDurationMultiplied  = mondayTasks.map (obj => parseInt(obj.duration) * currentRate);
 
console.log (taskDurationMultiplied);

//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
   
    var total = 0;
    for (var i = 0; i < taskDurationMultiplied.length; i++) {
     total += taskDurationMultiplied[i];
    }
console.log(total + " euros");
//Make sure the program can be used on any array of objects that contain a duration property with a number value