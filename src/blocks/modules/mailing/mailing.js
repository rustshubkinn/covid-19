// Elements
const form = document.forms.mailForm;
const inputMail = document.getElementById("emailAddress");

// Events
form.addEventListener("submit", (e) => onSubmit(e));

// HTTP Request
const url = "https://jsonplaceholder.typicode.com";

function postEmail(email) {
  fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email
    })
  })
    .then(data => console.log(data));
}

// Handlers
function onSubmit(e) {
  e.preventDefault();
  postEmail(inputMail.value); 
}
