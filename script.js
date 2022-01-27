const button = document.getElementsByClassName('navbar-button')[0]
const links = document.getElementsByClassName('navbar-links')[0]

button.addEventListener('click', () => {
    links.classList.toggle('active')
})