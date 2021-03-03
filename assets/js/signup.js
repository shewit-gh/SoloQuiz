const password = document.getElementById("exampleInputPassword1");
const password2 = document.getElementById("exampleInputPassword2").value;
const fname = document.getElementById("name");
const email = document.getElementById("memail");
const form = document.getElementById("frm");
let display = document.getElementById("error");
let display2 = document.getElementById("error2");
let display3 = document.getElementById("error3");
const button2 = document.getElementById("button");



form.addEventListener('submit', (e)=>{
    e.preventDefault()
        let profile = {
            uname: fname.value,
            email: email.value,
            password: password.value

        }
        if (profile.password.length < 8){
            
            console.log("password is too weak")
            display2.innerText = "password is too weak";
            
   
        }
        // else if(profile.password !== password2){
        //     console.log("blabalala")
        //     display3.innerText = "password isnt the same" ;
            

        // } 
        else{
                db.profile.put(profile).then(function(){
                    console.log("data has been added")
                    localStorage.setItem('user', JSON.stringify(profile));
                    console.log("data has been added to the local storage")
                    location.href = "languages.html";

                }).catch(function(error){
                    display.innerHTML = "User Name Taken";
                    console.log("error adding the data");

                })
            }
 


});


   
