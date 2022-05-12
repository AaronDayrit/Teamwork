"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Basics
// Aaron Dayrit

// Using 'dialog' Interface/API

const img = document.getElementById('img');
const message = "Hello world";

img.addEventListener('click', ()=> {
  window.alert(message);
  console.log(message);
})