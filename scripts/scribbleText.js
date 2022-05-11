/*
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 * 
 */

let x, y, newX, newY;
let white = 255;
let black = 0;

function setup() {
  createCanvas(
    windowWidth - (windowWidth * 0.3) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );

  background(white);

  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(black);
  strokeWeight(4);

  newX = random(-50, width + 50);
  newY = random(-50, height + 50);
  line(x, y, newX, newY);
  x = newX;
  y = newY;

  fill(white)
  noStroke();
  textSize(width / 6);
  textAlign(CENTER, CENTER);
  text("READ\nBETWEEN\nTHE LINES", width / 2, height / 2);
}

function mouseClicked() {
let temp;
temp = white;
white = black;
black = temp;
background(white);
}