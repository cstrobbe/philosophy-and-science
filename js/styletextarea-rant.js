//adapted from https://stackoverflow.com/a/43837521/6002174

'use strict';
//const textarea = document.querySelector("textarea");
const textarea = document.getElementById("therant");
textarea.addEventListener("input", event => {
  const target = event.currentTarget;
  const minLength = target.getAttribute("minlength");
  const currentLength = target.value.length;
  if (currentLength >= minLength) {
    textarea.className = "minLengthReached";
    console.log("Minimum input length reached.");
  } else if (currentLength < minLength) {
    textarea.classList.remove("minLengthReached");
    console.log("Minimum input length not reached.");
  }
});

