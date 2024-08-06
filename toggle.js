const reprintCheck = document.getElementById("reprint-check-toggle");
const upsResolutionCheck = document.querySelector("#ups-claim-check-toggle");
const reprintCoveredCheckDiv = document.getElementById("ups-claim-check");
const upsClaimInput = document.querySelector("#ups-claim-input");
const brianResolutionToggle = document.querySelector(
  "#brian-resolution-check-toggle"
);

const brianInputDiv = document.querySelector(".brian-coupon-check-input-div");

const testCheck = document.getElementById("test-check");
const reprintCoveredCheckToggle = document.getElementById(
  "reprint-covered-check-toggle"
);
const textInputDiv = document.getElementById("text-input-div");
const orderNumberInput = document.querySelector("#text-input-order-num");
const brianCouponDiv = document.querySelector("#brian-coupon-check");

function updateDisplay() {
  if (reprintCheck.checked) {
    reprintCoveredCheckDiv.style.display = "flex";
    textInputDiv.style.display = "flex";
    brianCouponDiv.style.display = "flex";
  } else {
    reprintCoveredCheckDiv.style.display = "none";
    textInputDiv.style.display = "none";
    brianCouponDiv.style.display = "none";
    orderNumberInput.value = "";
    reprintCoveredCheckToggle.value = "";
    upsResolutionCheck.checked = false;
    brianResolutionToggle.checked = false;
  }

  if (upsResolutionCheck.checked) {
    upsClaimInput.style.display = "flex";
  } else {
    upsClaimInput.style.display = "none";
  }

  if (brianResolutionToggle.checked) {
    brianInputDiv.style.display = "flex";
  } else {
    brianInputDiv.style.display = "none";
  }
}

console.log(reprintCheck, "\n", reprintCoveredCheckDiv, "\n,", testCheck);

reprintCheck.addEventListener("change", updateDisplay);
upsResolutionCheck.addEventListener("change", updateDisplay);
brianResolutionToggle.addEventListener("change", updateDisplay);
window.addEventListener("load", updateDisplay);
