/*
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 * 
 */

let x, y, newX, newY;

function setup() {
  createCanvas(
    windowWidth - (windowWidth * 0.3) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );
  background(255);
  x = width / 2;
  y = height / 2;
}

function draw() {
  strokeWeight(4);

  newX = random(-50, width + 50);
  newY = random(-50, height + 50);
  line(x, y, newX, newY);
  x = newX;
  y = newY;

  fill(255)
  textSize(width / 6);
  textAlign(CENTER, CENTER);
  text("INTO\nTHE\nDARK", width / 2, height / 2);
}
