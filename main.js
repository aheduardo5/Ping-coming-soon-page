const inputEmail = document.querySelector("#input-email");
const buttonNotify = document.querySelector("#btn-submit");
const errorMessage = document.querySelector("#error-message");

buttonNotify.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(inputEmail.value);
});

const validateEmail = (email) => {
  let expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (expReg.test(email)) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    errorMessage.style.visibility = "hidden";
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid red";
    errorMessage.style.visibility = "visible";
  }
};
