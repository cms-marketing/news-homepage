"use strict";

const wbtn = document.getElementById("btn");
const menuContainer = document.getElementById("menu");
const closeBtn = document.getElementById("close");

wbtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("menu").style.width = "250px";
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("menu").style.width = "0";
  //   document.body.style.backgroundColor = "white";
});
