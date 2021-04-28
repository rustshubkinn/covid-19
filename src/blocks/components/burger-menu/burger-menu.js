const burgerButton = document.querySelector(".burger");

burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("change");
});

export default burgerButton;