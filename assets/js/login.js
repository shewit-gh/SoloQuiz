const form2 = document.getElementById("frm2")
const userName = document.getElementById("user")
const password2 = document.getElementById("password2")
let  displaying = document.getElementById("disp")

const how = (JSON.parse(localStorage.getItem('user'))).uname
const pass = (JSON.parse(localStorage.getItem('user'))).password
form2.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (userName.value === how && password2.value === pass){
        location.href = 'languages.html'

    }else{
        console.log("wrong password or email")
        displaying.innerHTML = 'wrong email or password'

    }
})