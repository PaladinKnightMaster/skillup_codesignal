/*
let cometReturns = 0;
let spaceStatus = document.getElementById("spaceStatus");

let cometInterval = setInterval(() => {
  cometReturns++;

  // TODO: Set the text content of spaceStatus to show comet passes
  // For example: "The comet has returned X times!"

  if (cometReturns === 3) {
    clearInterval(cometInterval);
    // TODO: Set spaceStatus text content to indicate the comet has stopped visiting
  }
}, 2000);
*/

let cometReturns = 0;
let spaceStatus = document.getElementById("spaceStatus");

let cometInterval = setInterval(() => {
  cometReturns++;

  // TODO: Set the text content of spaceStatus to show comet passes
  // For example: "The comet has returned X times!"

  spaceStatus.textContent = `The comet has returned ${cometReturns} times!`;

  if (cometReturns === 3) {
    clearInterval(cometInterval);
    // TODO: Set spaceStatus text content to indicate the comet has stopped visiting
    spaceStatus.textContent = `The comet has stopped visiting after ${cometReturns} passes.`;
  }
}, 2000);