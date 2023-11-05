const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');
const openModalTrigger = document.getElementById('openModalTrigger');
const topics = document.querySelectorAll('.topic');
const modalBackground = document.getElementById('modalBackground');

topics.forEach(topic => {
    topic.addEventListener("click", () => {
        modal.querySelector('h2').innerText = topic.innerText;
        modal.style.display = 'block';
        modalBackground.style.display = 'block';
    });
})


closeModal.addEventListener('click', () => {
    modalBackground.style.display = 'none';
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalBackground.style.display = 'none';
        modal.style.display = "none";
    }
})