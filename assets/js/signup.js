const password = document.getElementById("exampleInputPassword1");
const fname = document.getElementById("fname");
const email = document.getElementById("memail");
const form = document.getElementById("frm");
let display = document.getElementById("error");
let display2 = document.getElementById("error2");
const button = document.getElementById("button");



form.addEventListener('submit', (e)=>{
     e.preventDefault()
    //  if (password.innerText.length < 8){
    //      console.log("password is too weak")
    //      display2.innerText = "password is too weak"

    //  } else if(password.innerText.length > 20){
    //      display2.innerText = "password is too long"
    //  } else{

        let profile = {
            uname: fname.value,
            email: email.value,
            password: password.value

        }

        db.profile.put(profile).then(function(){
            console.log("data has been added")
            localStorage.setItem('user', JSON.stringify(profile));
            console.log("data has been added to the local storage")
            location.href = "languages.html";

        }).catch(function(error){
            console.log("error adding the data");

        })

    // }

    


});



   
//     if (fname.length == 0 || email.length == 0 || password.length == 0){
//         e.preventDefault();
//         display.innerHTML = 'please fill out the required fields'
        
//     }
//     else if ( (password.length < 8 && password.length > 0) || password.length > 20 ){
//         e.preventDefault();
//         display2.innerHTML = 'password must be morethan 8 and less than 20 characters '
        
//     }
//     else if(!email.includes('@')){
//         e.preventDefault();
//         display3.innerHTML = 'incorrect email format'
        

//     }else{
//         true;
        
//     }
