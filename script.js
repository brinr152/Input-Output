// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");

let isPainting = false;

//currentColor is the path of the current img file I want
var currentColor = 'colors/paint1.png';

//Creating buttons, chaning colors
let paint1 = document.querySelector("#paint1");

paint1.addEventListener("click", function(){
  currentColor = 'colors/paint1.png';
})

let paint2 = document.querySelector("#paint2");

paint2.addEventListener("click", function(){
  currentColor = 'colors/paint2.png';
})

let paint3 = document.querySelector("#paint3");

paint3.addEventListener("click", function(){
  currentColor = 'colors/paint3.png';
})

let paint4 = document.querySelector("#paint4");

paint4.addEventListener("click", function(){
  currentColor = 'colors/paint4.png';
})

let paint5 = document.querySelector("#paint5");

paint5.addEventListener("click", function(){
  currentColor = 'colors/paint5.png';
})

let paint6 = document.querySelector("#paint6");

paint6.addEventListener("click", function(){
  currentColor = 'colors/paint6.png';
})

let paint7 = document.querySelector("#paint7");

paint7.addEventListener("click", function(){
  currentColor = 'colors/paint7.png';
})

let paint8 = document.querySelector("#paint8");

paint8.addEventListener("click", function(){
  currentColor = 'colors/paint8.png';
})

let paint9 = document.querySelector("#paint9");

paint9.addEventListener("click", function(){
  currentColor = 'colors/paint9.png';
})

let paint10 = document.querySelector("#paint10");

paint10.addEventListener("click", function(){
  currentColor = 'colors/paint10.png';
})

let paint11 = document.querySelector("#paint11");

paint11.addEventListener("click", function(){
  currentColor = 'colors/paint11.png';
})

let paint12 = document.querySelector("#paint12");

paint12.addEventListener("click", function(){
  currentColor = 'colors/paint12.png';
})

let paint15 = document.querySelector("#paint15");

paint15.addEventListener("click", function(){
  currentColor = 'colors/paint15.png';
})

let erase = document.querySelector("#erase");

erase.addEventListener("click", function(){
  currentColor = 'colors/erase.png';
})

//Makes it so the color "paints" when you move your mouse
canvas.addEventListener("mousemove", function(event){
  isPainting = true;
  console.log("This is the mousemove event");
  console.log(event);

  let newColor = document.createElement("img");
  newColor.classList.add("color");
  newColor.src = currentColor;

  newColor.style.left = event.pageX + "px";
  newColor.style.top = event.pageY + "px";

  newColor.classList.add("cursor");

  canvas.appendChild(newColor);
})


// When you hit the "Backspace" key, the contents of the canvas clears
document.addEventListener("keydown", function(event){
  if(event.keyCode === 8){
    event.preventDefault();
    canvas.innerHTML = "";
  }
})
