// Elements
const inputMail = document.getElementById("emailAddress");
const form = document.forms.mailForm;

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit();
});

// Handlers
function onSubmit() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: `${inputMail.value}`
        })
    })
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data));
}