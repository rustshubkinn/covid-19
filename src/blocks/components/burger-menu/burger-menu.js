const burgerButton = document.querySelector(".burger");

burgerButton.addEventListener("click", function myFunction() {
    burgerButton.classList.toggle("change");
});

export default burgerButton;