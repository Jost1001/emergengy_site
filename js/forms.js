const form = document.querySelector("form");

const outputNavn = document.querySelector("#navn_output");
const outputRadio = document.querySelector("#radio_output");
const outputDato = document.querySelector("#dato_output");
const outputCheck = document.querySelector("#check_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();

  const formData = new FormData(form);

  console.log(formData.get("fest"));
  outputNavn.textContent = formData.get("fest");
  outputRadio.textContent = formData.get("valg");
  outputDato.textContent = formData.get("dato");
  outputCheck.innerHTML = formData.getAll("check").join("<br>");
  form.reset();
}

form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
