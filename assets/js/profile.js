document.getElementById("userNameDisplay").innerHTML = (JSON.parse(localStorage.getItem('user'))).uname

document.getElementById("emailDisplay").innerHTML = (JSON.parse(localStorage.getItem('user'))).email
const button = document.getElementById('Logout')

button.addEventListener('click',()=>{
    location.href = "login.html"
    
})