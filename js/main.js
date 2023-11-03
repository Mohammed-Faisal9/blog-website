// sidebar
const sidebar = document.getElementById("sidebar")
const main = document.querySelector('.main')
const toggleOpen = document.querySelector('.toggle-open')
const toggleClose = document.querySelector('.toggle-close')

const toggles_action = () => {
    sidebar.classList.toggle('move')
    toggleOpen.classList.toggle('d-none');
    toggleClose.classList.toggle('d-none');
}

const main_clicked = () => {
    sidebar.classList.remove('move')
    toggleOpen.classList.remove('d-none')
    toggleClose.classList.add('d-none')
}

toggleOpen.addEventListener('click', toggles_action);

toggleClose.addEventListener('click', toggles_action);

main.addEventListener('click', main_clicked);


// progress
const progress = document.querySelectorAll('.progress-article .progress-bar span');
progress.forEach((prog) => {
    prog.style.width = prog.dataset.progress;
})