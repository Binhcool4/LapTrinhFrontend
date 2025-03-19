let openModalBtn = document.querySelector('.open-modal-btn');
let modalContainer = document.querySelector('.modal-container');
let closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

// Đóng modal khi click ra ngoài
// modalContainer.addEventListener('click', (event) => {
//     if (event.target === modalContainer) {
//         modalContainer.style.display = 'none';
//     }
// });