const fname = localStorage.getItem('fname');
const email = localStorage.getItem('email');

document.getElementById('insertFirstName').innerHTML = fname;
document.getElementById('insertEmail').innerHTML = email;