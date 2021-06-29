const sideBarToggle = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

sideBarToggle.addEventListener('click', () => {
	sideBar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', () => {
	sideBar.classList.remove('show-sidebar')
})