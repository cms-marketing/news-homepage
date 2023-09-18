"use strict";

const wbtn = document.getElementById("btn");
const menuContainer = document.getElementById("menu");
const closeBtn = document.getElementById("close");

wbtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("menu").style.width = "250px";
  document.getElementById("body").style.backdropFilter = "rgba(0,0,0,0.5);";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("menu").style.width = "0";
});
