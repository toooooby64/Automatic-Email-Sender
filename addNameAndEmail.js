const fname = sessionStorage.getItem('fname');
const email = sessionStorage.getItem('email');

console.log(fname)
console.log(email)
console.log("pls change")

document.getElementById('insertFirstName').innerHTML = fname;
document.getElementById('insertEmail').innerHTML = email;
