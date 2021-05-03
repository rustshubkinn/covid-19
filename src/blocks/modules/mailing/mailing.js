// Elements
const form = document.forms.mailForm;
const inputMail = form.elements.emailAdress;

// Events
form.addEventListener("submit", (e) => onSubmit(e));


const URL = "https://jsonplaceholder.typicode.com";

function postEmail(email) {
  fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  }) .then(data => console.log(data));
}

// Handlers
function onSubmit(e) {
  e.preventDefault();
  postEmail(inputMail.value); 
}
