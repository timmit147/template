const whatsappButton = document.querySelector('.whatsapp');

function toggleActiveClass() {
    whatsappButton.classList.add('active');
    setTimeout(() => {
        whatsappButton.classList.remove('active');
    }, 4000);
}

function repeatToggle() {
    setInterval(() => {
        toggleActiveClass();
    }, 8000);
}

repeatToggle();