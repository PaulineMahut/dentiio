function openMessage() {
    const box = document.querySelectorAll(".box");
    const messageContainer = document.querySelector(".message-container-hidden");
    const fondGris = document.querySelector(".fond-gris-hidden");
    box.forEach(element => {
        element.addEventListener("click", () => {
            messageContainer.classList.remove("message-container-hidden");
            messageContainer.classList.add("message-container");
            fondGris.classList.remove("fond-gris-hidden");
            fondGris.classList.add("fond-gris");
        })
    });
};
openMessage();

const closeMessage = () => {
    const button = document.querySelector(".close-button");
    button.addEventListener("click", () => {
        const fondGris = document.querySelector(".fond-gris");
        const messageContainer = document.querySelector(".message-container");
        messageContainer.classList.replace("message-container", "message-container-hidden");
        fondGris.classList.replace("fond-gris", "fond-gris-hidden");

    })

}
closeMessage();