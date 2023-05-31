const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let errorMessages = [];
  password.value === "password"
    ? errorMessages.push("password cannot be password")
    : null;
  name.value === "" || name.value == null
    ? errorMessages.push("Name is required")
    : null;
  password.value.length <= 6
    ? errorMessages.push("password must be longer than 6 characters")
    : null;
  password.value.length >= 12
    ? errorMessages.push("password must be less than 12 characters")
    : "";
  if (errorMessages.length > 0) {
    e.preventDefault();
    errorDiv.innerText = errorMessages.join(" , ");
  }
});
