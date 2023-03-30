/*
 * Copyright (c) 2023 Michael Kolesidis
 * GNU Affero General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 */

let color = "white";
let message = document.getElementById("message");
let read = document.getElementById("read");

message.style.color = color;
read.style.color = color;

document.addEventListener("click", () => {
  if (color === "white") {
    color = "black";
    message.style.color = color;
    read.style.color = color;
  } else if (color === "black") {
    color = "white";
    message.style.color = color;
    read.style.color = color;
  }
});
