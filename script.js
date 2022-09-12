const cart_button = document.querySelector(".cart_btn ")

cart_button.addEventListener("click", () => {
    cart_button.classList.add("clicked");

    setTimeout(() => {
        cart_button.classList.remove("clicked")
    }, 2500);
    
    console.log("hello")
})