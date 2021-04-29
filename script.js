// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");

let isPainting = false;

// TODO: Replace with your own color
var currentColor = 'paint.png';


//Add functionality that makes it so the color "paints" when you hold your mouse down and move it on the screen
canvas.addEventListener("mousemove", function(event){
  isPainting = true;
  console.log("This is the mousemove event");
  console.log(event);

  let newColor = document.createElement("img");
  newColor.classList.add("color");
  newColor.src = currentColor;

  newColor.style.left = event.pageX + "px";
  newColor.style.top = event.pageY + "px";

  canvas.appendChild(newColor);
})

canvas.addEventListener("mouseup", function(event){
  isPainting = false;
})

// When you hit the "Backspace" key, the contents of the canvas clears
document.addEventListener("keydown", function(event){
  if(event.keyCode === 8){
    event.preventDefault();
    canvas.innerHTML = "";
  }
})
