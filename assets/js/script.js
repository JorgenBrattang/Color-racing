const myButtons = document.getElementById('wrapper-button');

myButtons.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  console.log(event.target.id);
})



const playButton = document.getElementById("play--btn");
playButton.addEventListener("click", function() {
  document.getElementById("play--btn").style.backgroundColor = 'red';
});

const color1Button = document.getElementById("color-1--btn");
color1Button.addEventListener("click", function() {
  document.getElementById("color-1--btn").style.backgroundColor = 'red';
});

const color2Button = document.getElementById("color-2--btn");
color2Button.addEventListener("click", function() {
  document.getElementById("color-2--btn").style.backgroundColor = 'red';
});

const color3Button = document.getElementById("color-3--btn");
color3Button.addEventListener("click", function() {
  document.getElementById("color-3--btn").style.backgroundColor = 'red';
});

const color4Button = document.getElementById("color-4--btn");
color4Button.addEventListener("click", function() {
  document.getElementById("color-4--btn").style.backgroundColor = 'red';
});