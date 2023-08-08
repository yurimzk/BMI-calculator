export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".bmi h2"),
    btnClose: document.querySelector(".bmi .btn-close"),

    open() {
        Modal.wrapper.classList.add("open");
    },
    close() {
        Modal.wrapper.classList.remove("open");
    }
}

Modal.btnClose.onclick = () => {
    Modal.close();
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close();
    };
};