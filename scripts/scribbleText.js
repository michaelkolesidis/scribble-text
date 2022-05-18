/*
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 * 
 */

let x, y, newX, newY;
let color1 = 255;
let color2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(color1);

  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(color2);
  strokeWeight(4);

  newX = random(-50, width + 50);
  newY = random(-50, height + 50);
  line(x, y, newX, newY);
  x = newX;
  y = newY;

  fill(color1)
  noStroke();
  textSize(width / 6);
  textAlign(CENTER, CENTER);
  text("READ\nBETWEEN\nTHE LINES", width / 2, height / 2);
}

function mouseClicked() {
let temp;
temp = color1;
color1 = color2;
color2 = temp;
background(color1);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}