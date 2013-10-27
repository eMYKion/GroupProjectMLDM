var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');



//keywords are .fillStyle and .strokeStyle
context.font = '32pt Arial';
context.fillStyle = 'DeepSkyBlue';
context.strokeStyle = 'DarkSlateGrey';


//puts the words "What is smells like tuna?" at position x:50 and y:200 (keep in mind y axis is inverted)
context.fillText("What is smells like tuna?", 50, 200);
//puts a 'border' of "What is smells like tuna?" at position x:50 and y:200
//guess what would happen if (x,y) position is offset of context.fillText?!! :P
context.strokeText("What is smells like tuna?", 50, 200);



