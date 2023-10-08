let ageEl = document.getElementById('age')
let copyEl = document.getElementById('copy')

let cur = new Date().getFullYear()

ageEl.innerHTML = cur - 2006
copyEl.innerHTML = cur

let captchaEl = document.querySelector('.recaptcha-container')
let formEl = document.querySelector('form')
let formListEl = document.querySelector('form ul')
let cancelButtonEl = captchaEl.querySelector('button') 

formEl.addEventListener('submit', (ev) => {
	formListEl.classList.add('hidden')
	captchaEl.classList.remove('hidden')
	ev.preventDefault();
})

cancelButtonEl.addEventListener('click', (ev) => {
	formListEl.classList.remove('hidden')
	captchaEl.classList.add('hidden')
})

function recaptchaCallback() {
	formEl.submit()
}