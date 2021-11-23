// Modal

const buyBtns = document.querySelectorAll('.js-buyBtns');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modalClose');
const modalContainer = document.querySelector('.js-modalContainer');

function showModal() {
    modal.classList.add('open');
}

function removeModal() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal);
}

modalClose.addEventListener('click', removeModal);
modal.addEventListener('click', removeModal);
modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})


