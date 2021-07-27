'use strict';

function adaptBaseline () {
  let baseElem = document.getElementById("base-url");
  let currentUrl = document.URL;
  let onGithub = currentUrl.includes("cstrobbe.github.io");
  if (!onGithub) {
    baseElem.parentNode.removeChild(baseElem);
  }
}

adaptBaseline();

