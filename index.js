const dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "#FF69B4";

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

const moveDodgerRight = () => {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers);
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
};

const moveDodgerUp = () => {
  const topNumbers = dodger.style.bottom.replace("px", "");
  const top = parseInt(topNumbers);
  if (top < 380) {
    dodger.style.bottom = `${top + 1}px`;
  }
};

const moveDodgerDown = () => {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
};

document.addEventListener("keydown", (pressedKey) => {
  if (pressedKey.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (pressedKey.key === "ArrowRight") {
    moveDodgerRight();
  } else if (pressedKey.key === "ArrowUp") {
    moveDodgerUp();
  } else if (pressedKey.key === "ArrowDown") {
    moveDodgerDown();
  }
});
