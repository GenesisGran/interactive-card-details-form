const form = document.querySelector("form");
let root = document.documentElement;

const idName = document.querySelector("#name");
const number = document.querySelector("#cardNumber");
const expMonth = document.querySelector("#expMonth");
const expYear = document.querySelector("#expYear");
const cvc = document.querySelector("#cvc");

const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const cardExpMonth = document.querySelector("#card-expMonth");
const cardExpYear = document.querySelector("#card-expYear");
const cardCvc = document.querySelector("#card-cvc");

const numberError = document.querySelector(".numberError");
const errorDate = document.querySelector(".errorDate");
const errorCvc = document.querySelector(".errorCvc");

const thankYou = document.querySelector(".thankYou");

function changeCard(id, card, value) {
  id.addEventListener("input", (e) => {
    if (id.value == "") {
      card.innerText = value;
    } else {
      card.innerText = id.value.toUpperCase();
    }
  });
}
changeCard(idName, cardName, "JANE APPLESEED");
changeCard(number, cardNumber, "0000 0000 0000 0000");
changeCard(expMonth, cardExpMonth, "00");
changeCard(expYear, cardExpYear, "00");
changeCard(cvc, cardCvc, "000");

function toogleThankYou() {
  form.remove();
  thankYou.style.display = "flex";
}

function toDefault() {
  function removeInput() {
    idName.value = "";
    number.value = "";
    expMonth.value = "";
    expYear.value = "";
    cvc.value = "";
  }
  removeInput();
  thankYou.remove();
  document.querySelector("main").append(form);
}

function toogleError(input, errorMessage) {
  input.style.borderColor = "hsl(0, 100%, 66%)";
  errorMessage.style.display = "block";
}
function checkBlank(errorMessage) {
  errorMessage.style.display = "none";
}
function changeBorderTopBottom(input, topColor, bottomColor) {
  input.style.borderTop = "1px solid " + topColor;
  input.style.borderBottom = "1px solid " + bottomColor;
}
function errorFocus(input) {
  if (input.style.borderRightColor == "rgb(255, 82, 82)") {
    changeBorderTopBottom(input, "hsl(249, 99%, 64%)", "hsl(278, 94%, 30%)");
  }
}
function changeBorder(input) {
  if (input.style.borderRightColor == "rgb(255, 82, 82)") {
    changeBorderTopBottom(input, "hsl(0, 100%, 66%)", "hsl(0, 100%, 66%)");
  }
}
