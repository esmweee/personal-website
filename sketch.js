// First project | Personal website 


// declare all the variables
let img;
let screen = 1;
let enterButton;
let myMelody; let myMelody1; let myMelody2; let myMelody3; let melodyCursor;


// preload
function preload() {
myMelody = loadImage("assets/mymelody.png");
melodyCursor = loadImage("assets/melodycursor.png");
myMelody1 = loadImage("assets/mymelody1.png");
myMelody2 = loadImage("assets/mymelody2.png");
myMelody3 = loadImage("assets/mymelody3.gif");
}

// setup
function setup() {
//canvas
let canvas = createCanvas(600, 400);
canvas.parent("sketch-container");



// enter button
enterButton = new Sprite (width /2, height/2 + 100);
enterButton.w = 100;
enterButton.h = 50; 
enterButton.collider = "k";
enterButton.color = "#ff8ab7";
enterButton.text = "enter !!";
enterButton.stroke = color(156, 34, 67);
}

// draw 
function draw () {
if (screen == 1) {
enterButton.visible = true;
showScreen1();


//remove button when screen 2 ( or clicked )
if (enterButton.mouse.pressed()) {
screen = 2;
enterButton.remove();
}
}

else if (screen == 2) {
 showScreen2();
}
}



// show the screen 1 

function showScreen1() {
background("#ff8ab7");
fill(0);
textSize(30);
textAlign(CENTER, CENTER);
text("aylins website", width / 2, height / 2 - 20);
textSize(20);
}

// show screen two
function showScreen2() {
background("#ff8ab7");
fill(0);
textSize(24);
textAlign(CENTER, CENTER);
text("the website is running", width / 2, height / 2);
image(myMelody, width / 2 - 50, height / 2 + 50, 100, 100);

}
