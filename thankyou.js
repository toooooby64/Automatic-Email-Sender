
const urlParams = new URLSearchParams(window.location.search) 

const fname = urlParams.get('fname')
const email = urlParams.get('email')

document.getElementById("fname").innerText = fname
document.getElementById("email").innerText = email
