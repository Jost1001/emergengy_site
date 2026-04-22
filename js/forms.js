// localStorage
const form = document.querySelector("form");

const outputNavn = document.querySelector("#navn_output");
const outputRadio = document.querySelector("#radio_output");
const outputDato = document.querySelector("#dato_output");
const outputCheck = document.querySelector("#check_output");

const clearBtn = document.querySelector("#clearBtn");

function updateOutput(formData) {
  outputNavn.textContent = formData.get("fest");
  outputRadio.textContent = formData.get("valg");
  outputDato.textContent = formData.get("dato");
  outputCheck.innerHTML = formData.getAll("check").join("<br>");
}
function saveToLocalStorage() {
  const formData = new FormData(form);

  const data = {
    fest: formData.get("fest"),
    valg: formData.get("valg"),
    dato: formData.get("dato"),
    check: formData.getAll("check"),
  };
  localStorage.setItem("formData", JSON.stringify(data));
}

// function handleSubmit(event) {
//   console.log("handleSubmit");
//   event.preventDefault();

//   const formData = new FormData(form);
//   updateOutput(formData);
//   saveToLocalStorage;
// }

// form.addEventListener("submit", handleSubmit);

// function cancelPopup(event) {
//   event.preventDefault();
//   form.querySelector(":user-invalid").focus();
// }

// form.addEventListener("invalid", cancelPopup, true);

// min "autosave" funktion og min "live updater"
form.addEventListener("input", () => {
  const formData = new FormData(form);
  updateOutput(formData);
  saveToLocalStorage;
});

// taler til data ved load af siden
window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (!savedData) return;

  form.fest.value = savedData.fest || "";
  form.dato.value = savedData.dato || "";

  if (savedData.valg) {
    const radio = form.querySelector(
      'input[name="valg"][value="${savedData.valg}"]',
    );
    if (radio) radio.checked = true;
  }

  if (savedData.check) {
    savedData.check.forEach((value) => {
      const checkbox = form.querySelector(
        'input[name="check"][value="${value}"]',
      );
      if (checkbox) checkbox.checked = true;
    });
  }

  // det der viser min data
  const formData = new FormData(form);
  updateOutput(formData);
});

// Ryd alt knap - til at kunne starte en ny form
clearBtn.addEventListener("click", () => {
  form.reset();

  localStorage.removeItem("formData");

  outputNavn.textContent = "";
  outputRadio.textContent = "";
  outputDato.textContent = "";
  outputCheck.innerHTML = "";
});
