const reprintCheck = document.getElementById("reprint-check-toggle");
const reprintCoveredCheckDiv = document.getElementById("reprint-covered-check");
const testCheck = document.getElementById("test-check");
const reprintCoveredCheckToggle = document.getElementById(
  "reprint-covered-check-toggle"
);
const textInputDiv = document.getElementById("text-input-div");
const textInput = document.getElementById("text-input");
const brianCouponDiv = document.querySelector(".brian-coupon-check");

function updateDisplay() {
  if (reprintCheck.checked) {
    reprintCoveredCheckDiv.style.display = "flex";
    textInputDiv.style.display = "flex";
    brianCouponDiv.style.display = "flex";
  } else {
    reprintCoveredCheckDiv.style.display = "none";
    textInputDiv.style.display = "none";
    brianCouponDiv.style.display = "none";
    textInput.value = "";
    reprintCoveredCheckToggle.checked = false;
  }
}

// console.log(reprintCheck, "\n", reprintCoveredCheckDiv, "\n,", testCheck);

reprintCheck.addEventListener("change", updateDisplay);
window.addEventListener("load", updateDisplay);
